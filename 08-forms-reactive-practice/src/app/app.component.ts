import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenProjectNames = ['test'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      projectData: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          this.forbiddenName.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmail.bind(this)
        ),
      }),
      status: new FormControl('stable'),
    });
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
  }

  forbiddenName(control: FormControl): { [s: string]: boolean } {
    const name = (<string>control.value)?.toLowerCase();
    if (this.forbiddenProjectNames.includes(name)) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
