export class Person {
  personId: string;
  name: string;
  userData: string;
  persistedFaceIds: string[];


  constructor(personId: string, name: string, userData: string, persistedFaceIds: string[]) {
    this.personId = personId;
    this.name = name;
    this.userData = userData;
    this.persistedFaceIds = persistedFaceIds;
  }
}
