import {Rectangle} from './rectangle.model';
import {FaceAttributes, FaceRectangle} from '@azure/cognitiveservices-face/esm/models';

export class Face {
  faceId: string;
  faceRectangle: FaceRectangle;
  faceAttributes: FaceAttributes;

  constructor(faceId: string, faceRectangle: Rectangle, faceAttributes: FaceAttributes) {
    this.faceId = faceId;
    this.faceRectangle = faceRectangle;
    this.faceAttributes = faceAttributes;
  }
}
