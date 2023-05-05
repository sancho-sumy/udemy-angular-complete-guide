import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoginService } from './loggin.service';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'course-project';

  constructor(
    private authService: AuthService,
    private logginService: LoginService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.AutoLogin());
    this.logginService.printLog('Hello from AppComponent ngOnInit');
  }
}
