import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FaceService} from '../../service/face.service';
import {style} from '@angular/animations';

@Component({
  selector: 'app-from-url',
  templateUrl: './from-url.component.html',
  styleUrls: ['./from-url.component.scss']
})
export class FromUrlComponent {

  @Output() imageUrl: EventEmitter<string> = new EventEmitter();

  submitted = false;
  url = '';

  constructor(private faceService: FaceService) { }

  onSubmit(urlForm: NgForm) {
    this.imageUrl.emit(urlForm.controls.url.value);
  }
}
