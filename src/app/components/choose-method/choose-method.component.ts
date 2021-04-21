import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-choose-method',
  templateUrl: './choose-method.component.html',
  styleUrls: ['./choose-method.component.scss']
})
export class ChooseMethodComponent {

  @Output() chosenMethod: EventEmitter<string> = new EventEmitter();

  constructor() { }

  chooseMethod(method: string) {
    this.chosenMethod.emit(method);
  }
}
