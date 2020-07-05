import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-databinding-deep-div';
  isOdd = false;

  onIncrease(myLittleNumber: number): void {
    this.isOdd = myLittleNumber % 2 === 0;
  }
}
