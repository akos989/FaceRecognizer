export class PersonGroup {
  personGroupId: string;
  name: string;
  userData: string;

  constructor(personGroupId: string, name: string, userData: string) {
    this.personGroupId = personGroupId;
    this.name = name;
    this.userData = userData;
  }
}
