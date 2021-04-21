import {Component} from '@angular/core';
import {FaceRecognitionService} from '../../service/face-recognition.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private faceRecognitionService: FaceRecognitionService) { }

  getFaceGroups() {
    // this.faceRecognitionService.fetchPersonGroups();
  }

  createGroup() {
    // this.faceRecognitionService.createGroup();
  }

  createPerson() {
    // this.faceRecognitionService.createPerson();
  }

  addFaceToPerson() {
    // this.faceRecognitionService.addFaceToPerson();
  }

  getPerson() {
    // this.faceRecognitionService.getPerson();
  }

  trainGroup() {
    // this.faceRecognitionService.trainGroup();
  }

  identifyPerson() {
    // this.faceRecognitionService.identifyPerson();
  }
}
