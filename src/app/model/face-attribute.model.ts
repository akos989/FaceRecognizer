export class FaceAttributes {
  age: number;
  gender: string;
  smile: number;
  makeup: {
    eyeMakeup: boolean,
    lipMakeup: boolean
  };

  constructor(age: number, gender: string, smile: number, makeup: { eyeMakeup: boolean; lipMakeup: boolean }) {
    this.age = age;
    this.gender = gender;
    this.smile = smile;
    this.makeup = makeup;
  }
}
