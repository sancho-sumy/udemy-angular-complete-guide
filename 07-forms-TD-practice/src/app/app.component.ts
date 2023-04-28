import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') formData: NgForm;
  defaultOption = 'advanced';
  submitted = false;
  data = { email: '', password: '', subscription: '' };

  onSubmit() {
    console.log(this.formData.value);
    this.submitted = true;
    this.data.email = this.formData.value.email;
    this.data.password = this.formData.value.password;
    this.data.subscription = this.formData.value.subscription;
    this.formData.reset();
  }
}
