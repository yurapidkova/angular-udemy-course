import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  public username = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  resetUsername = (): void => {
    this.username = '';
  }
}
