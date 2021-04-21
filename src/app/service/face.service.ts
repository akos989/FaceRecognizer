import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Face} from '../model/face.model';
import {Rectangle} from '../model/rectangle.model';
import {FaceAttributes} from '../model/face-attribute.model';
import {environment} from '../../environments/environment';
import {FaceClient} from '@azure/cognitiveservices-face';
import {ApiKeyCredentials} from '@azure/ms-rest-js';
import {FaceAttributeType} from '@azure/cognitiveservices-face/esm/models';

@Injectable({
  providedIn: 'root'
})
export class FaceService {

  private emotion = {
    anger: 0.2,
    contempt: 0.2,
    disgust: 0.2,
    fear: 0.2,
    happiness: 0.2,
    neutral: 0.2,
    sadness: 0.2,
    surprise: 0.2
  };

  private makeup = {eyeMakeup: false, lipMakeup: true};

  persistedFaces: Face[] = [
    new Face('1', 'asdfdf-asdf',
      new Rectangle(193, 193, 219, 144),
      new FaceAttributes(11, 'male', 0.87, this.emotion, this.makeup)),
    new Face('2', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'male', 0.87, this.emotion, this.makeup)),
    new Face('3', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'female', 0.87, this.emotion, this.makeup)),
    new Face('4', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'female', 0.87, this.emotion, this.makeup)),
    new Face('5', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'male', 0.87, this.emotion, this.makeup)),
    new Face('6', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'male', 0.87, this.emotion, this.makeup)),
    new Face('7', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'female', 0.87, this.emotion, this.makeup)),
    new Face('8', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'female', 0.87, this.emotion, this.makeup)),
    new Face('9', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'male', 0.87, this.emotion, this.makeup)),
    new Face('10', 'asdfdf-asdf',
      new Rectangle(10, 10, 10, 10),
      new FaceAttributes(11, 'male', 0.87, this.emotion, this.makeup)),
  ];


  credentials = new ApiKeyCredentials({inHeader: {'Ocp-Apim-Subscription-Key': environment.API_KEY}});

  detectClient = new FaceClient(this.credentials, `${environment.SERVER_URL}/detect`);

  constructor(private http: HttpClient) { }

  detectFace(imgUrl: string, attributes: FaceAttributeType[]) {
    // const imageUrl = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/22221614_1526095650769765_5114227835489704013_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=zFVo_BF6NisAX9rn01K&_nc_ht=scontent-vie1-1.xx&oh=a29c21c10609270f8b63d7825083d011&oe=607D2D66';
    // const imageUrl2 = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/64667486_2381191238593531_4792238141379444736_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1EK3__P6sLUAX9NgLx-&_nc_ht=scontent-vie1-1.xx&oh=2a524220f7b9e86184680bcf80597d5d&oe=607E2938';
    // const imageUrl3 = 'https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/36148704_413228392522623_1510728160520437760_n.jpg?tp=1&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=wWLAeNVNq64AX-8suAz&ccb=7-4&oh=e4bddc3e15d704bf9ee5006e66fd37c9&oe=6080DDCE&_nc_sid=4f375e';
    // const imageUrl4 = 'https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/26864343_2029501530651603_451762020451090432_n.jpg?tp=1&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=AvKiClUkS-gAX-jTP1I&ccb=7-4&oh=50fb98e7c4abe3633823bbb23048e02c&oe=60833246&_nc_sid=4f375e';
    // const imageUrlDani = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/35465368_1963752480343995_5954973032077328384_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=Fx5g_nGtYYcAX_EJ_-l&_nc_ht=scontent-vie1-1.xx&oh=d9e55eb315c8a23a4b2202794645cb19&oe=60803C7D';

    return this.detectClient.face.detectWithUrl(imgUrl, {returnFaceAttributes: attributes});
  }

  detectFaceFromFile(file: string, attributes: FaceAttributeType[]) {
    return this.detectClient.face.detectWithStream(Buffer.from(file.split(',')[1], 'base64'), {
      returnFaceAttributes: attributes
    });
  }
}
