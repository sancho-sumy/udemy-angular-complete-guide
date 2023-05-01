import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoginService } from './loggin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'course-project';

  constructor(
    private authService: AuthService,
    private logginService: LoginService
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.logginService.printLog('Hello from AppComponent ngOnInit');
  }
}
