import {Component, Input, OnInit} from '@angular/core';
import {Face} from '../../model/face.model';

@Component({
  selector: 'app-detection-result',
  templateUrl: './detection-result.component.html',
  styleUrls: ['./detection-result.component.scss']
})
export class DetectionResultComponent {

  @Input() detectedFace: Face;

  constructor() { }
}
