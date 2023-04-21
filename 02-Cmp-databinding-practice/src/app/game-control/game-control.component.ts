import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  counter = 0;
  timer: ReturnType<typeof setInterval>;
  @Output() counterChanged = new EventEmitter<number>();

  onStartClick() {
    this.timer = setInterval(() => {
      this.counter++;
      this.counterChanged.emit(this.counter);
    }, 1000);
  }

  onStopClick() {
    console.log('Stop clicked');
    clearInterval(this.timer)
  }
}
