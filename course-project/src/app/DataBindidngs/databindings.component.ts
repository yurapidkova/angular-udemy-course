import {Component} from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './databindings.component.html'
})

export class DataBindingsComponent {

  isButtonEnabled = false;
  name = '';

  onInput($event) {
    this.isButtonEnabled = ($event.target as HTMLInputElement).value.length > 0;
  }

  onButtonClick($event) {
    this.reset();
  }

  reset() {
    this.name = '';
    this.isButtonEnabled = false;
  }
}
