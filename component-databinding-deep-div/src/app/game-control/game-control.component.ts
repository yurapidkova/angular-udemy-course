import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('increase') emitter = new EventEmitter<number>();
  timer;
  tik = 0;

  background = {odd: 'odd', even: 'even', init: 'init'};
  titles = {init: 'Hey, Press Start', progress: 'Game Running'};

  class = this.background.init;
  title = this.titles.init;

  constructor() {
  }

  ngOnInit(): void {
  }

  onGameStart(): void {
    this.timer = setInterval(this.onTick, 1000);
    this.class = this.tik % 2 === 0 ? this.background.even : this.background.odd;
    this.title = this.titles.progress + ' ' + this.tik;
  }

  onTick = (): void => {
    this.emitter.emit(++this.tik);
    this.class = this.tik % 2 === 0 ? this.background.even : this.background.odd;
    this.title = this.titles.progress + ' ' + this.tik;
  }

  onGameStop(): void {
    clearInterval(this.timer);
    this.tik = 0;
    this.class = this.background.init;
    this.title = this.titles.init;
  }

}
