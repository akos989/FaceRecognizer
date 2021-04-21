import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaceRecognitionService {

  constructor(private http: HttpClient) {
  }

  createPerson() {
    const personGroupId = 'test-group';
    this.http.post(`${environment.SERVER_URL}/persongroups/${personGroupId}/persons`,
      {
        name: 'Akos'
      })
      .subscribe(result => console.log('result: ', result), error => console.log('error: ', error));
  }

  addFaceToPerson() {
    const personGroupId = 'test-group';
    const personIdAkos = 'f92a2602-e10c-47ae-b438-b94e17dc9773';
    const imageUrl = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/22221614_1526095650769765_5114227835489704013_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=zFVo_BF6NisAX9rn01K&_nc_ht=scontent-vie1-1.xx&oh=a29c21c10609270f8b63d7825083d011&oe=607D2D66';
    const imageUrl2 = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/64667486_2381191238593531_4792238141379444736_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1EK3__P6sLUAX9NgLx-&_nc_ht=scontent-vie1-1.xx&oh=2a524220f7b9e86184680bcf80597d5d&oe=607E2938';
    this.http.post(`${environment.SERVER_URL}/persongroups/${personGroupId}/persons/${personIdAkos}/persistedFaces`, {url: imageUrl})
      .subscribe(result => console.log('result: ', result), error => console.log('error: ', error));
  }

  getPerson() {
    const personGroupId = 'test-group';
    const personIdAkos = 'f92a2602-e10c-47ae-b438-b94e17dc9773'; // "f92a2602-e10c-47ae-b438-b94e17dc9773"
    this.http.get(`${environment.SERVER_URL}/persongroups/${personGroupId}/persons/${personIdAkos}`)
      .subscribe(result => console.log('result: ', result), error => console.log('error: ', error));
  }

  identifyPerson() {
    this.http.post(`${environment.SERVER_URL}/identify`,
      {
        faceIds: ['a8418d53-ccdc-4644-bd68-33373b842f5d'],
        personGroupId: 'test-group'
      })
      .subscribe(result => console.log('result: ', result), error => console.log('error: ', error));
  }
}
