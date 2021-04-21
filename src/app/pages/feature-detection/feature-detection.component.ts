import {Component, ElementRef, ViewChild} from '@angular/core';
import {FaceService} from '../../service/face.service';
import {Face} from '../../model/face.model';
import {FaceAttributeType, FaceRectangle} from '@azure/cognitiveservices-face/esm/models';

@Component({
  selector: 'app-feature-detection',
  templateUrl: './feature-detection.component.html',
  styleUrls: ['./feature-detection.component.scss']
})
export class FeatureDetectionComponent {

  detectionMethod = '';

  detectedFaces: Face[] = [];

  image: string;

  @ViewChild('canvasElement') canvasRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('imageElement') imageRef: ElementRef<HTMLImageElement>;

  attributeOptions: {
    name: FaceAttributeType,
    checked: boolean
  }[] = [
    {name: 'age', checked: false},
    {name: 'gender', checked: false},
    {name: 'smile', checked: false},
    {name: 'makeup', checked: false},
  ];

  constructor(private faceService: FaceService) {
  }

  chooseMethod(method: string) {
    this.detectionMethod = method;
  }

  detectFace(url: string) {
    this.image = url;
    this.faceService.detectFace(url, this.getCheckedAttributes())
      .then(faces => {
        faces.forEach(face => {
          this.detectedFaces.push({
            faceId: face.faceId,
            faceRectangle: face.faceRectangle,
            faceAttributes: face.faceAttributes
          });
          this.drawRectangle(face.faceRectangle);
        });
      })
      .catch(err => console.log(err));
  }

  detectFaceFromFile(file: string) {
    this.image = file;
    this.faceService.detectFaceFromFile(file, this.getCheckedAttributes())
      .then(faces => {
        faces.forEach(face => {
          this.detectedFaces.push({
            faceId: face.faceId,
            faceRectangle: face.faceRectangle,
            faceAttributes: face.faceAttributes
          });
          this.drawRectangle(face.faceRectangle);
        });
      })
      .catch(err => console.log(err));
  }

  private getCheckedAttributes() {
    return this.attributeOptions
      .filter(option => option.checked)
      .map(option => {
        return option.name;
      });
  }

  private drawRectangle(rectangle: FaceRectangle) {
    setTimeout(() => {
      const imgElem = this.imageRef.nativeElement;
      const ctx = this.canvasRef.nativeElement.getContext('2d');
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, imgElem.width, imgElem.height);
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'green';
      const scaleX = imgElem.width / imgElem.naturalWidth;
      const scaleY = imgElem.height / imgElem.naturalHeight;
      ctx.rect(
        rectangle.left * scaleX, rectangle.top * scaleY,
        rectangle.width * scaleX, rectangle.height * scaleY
      );
      ctx.stroke();
    }, 311);
  }
}
