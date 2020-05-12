import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.css']
})
export class ExerciseThreeComponent implements OnInit {
  details: Details[] = [];
  isHidden = true;
  private lastId = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  toogle = (): void => {
    this.isHidden = !this.isHidden;
    this.lastId++;
    this.details.push(new Details(
      this.lastId,
      this.isHidden ? 'hide' : 'show',
      new Date()
    ));
  }

}

class Details {
  id: number;
  time: string;
  action: string;

  constructor(id: number, action: string, time: Date = new Date()) {
    this.id = id;
    this.action = action;
    this.time = time.toLocaleString();
  }
}
