import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent {

  @Output() imageFile: EventEmitter<any> = new EventEmitter();

  submitted = false;

  file: any;
  imageSrc: string;

  constructor() { }


  onSubmit() {
    this.submitted = true;
    this.imageFile.emit(this.imageSrc);
  }

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    if (event && event.item(0)) {
      const file = event && event.item(0);
      console.log(file);
      this.file = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result.toString();
      };

      reader.readAsDataURL(file);
    }
  }
}
