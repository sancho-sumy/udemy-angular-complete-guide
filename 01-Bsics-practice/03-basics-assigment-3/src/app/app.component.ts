import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHidden: boolean = false;
  logArray: number[] = [];

  onButtonClick(): void {
    this.isHidden = !this.isHidden;
    this.logArray.push(this.logArray?.length + 1);
    console.log(this.logArray);
  }
}
