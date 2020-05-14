import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  numberReceived = new EventEmitter<number>();
  private gameRef: number;
  private lastNumber = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onGameStart = (): void => {
    this.gameRef = setInterval(() => {
      this.lastNumber += Math.ceil(Math.random() * 10);
      this.numberReceived.emit(this.lastNumber);
    }, 1000);
  }

  onGameStop = (): void => {
    if (!this.gameRef) {
      return;
    }
    clearInterval(this.gameRef);
    this.gameRef = 0;
  }
}
