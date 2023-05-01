import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-root',
	imports: [WelcomeComponent, RouterModule],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {}
