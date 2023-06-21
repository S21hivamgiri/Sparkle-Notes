import { Component, ViewChild, OnInit, Optional, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  @ViewChild('passwordField') passwordField ?: ElementRef;
  loginForm: FormGroup
  isSet = false;
  passwordType = 'password';
  errorMessage = '';

  constructor(private authService: AuthService, fb: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<LoginScreenComponent>) {
    this.loginForm = fb.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', [Validators.required, Validators.minLength(8), Validators.pattern('.*[0-9].*')]]
    });
  }

  ngOnInit(): void {
    this.authService.isRemembered().subscribe((data: Boolean) => {
      if (data) {
        this.authService.getCurrentLoginDetails().subscribe((userData?: User) => {
          this.loginForm.setValue({
            emailFormControl: userData?.email,
            passwordFormControl: userData?.password
          });
          this.isSet = true;
        });
      }
    });
  }

  onKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.loginForm.valid) {
        this.save(this.loginForm);
        return;
      }
      this.passwordField?.nativeElement.querySelector('input').focus();
    }
  }

  save(form: FormGroup) {
    let finalData = { email: this.loginForm.get('emailFormControl')?.value, password: this.loginForm.get('passwordFormControl')?.value }
    if (form.valid) {
      this.authService.login(finalData).subscribe((res) => {
        if (res.body.success == true) {
          const user = res.body.user;
          this.authService.setCurrentUserData(finalData, this.isSet);
          sessionStorage.setItem("user", JSON.stringify(user));

          if (user.roles.indexOf("Admin") > -1) {
            this.authService.setCurentRole('Admin')
          } else
            if (user.roles.indexOf("User") > -1) {
              this.authService.setCurentRole('User');
            }
          this.dialogRef.close(user);
        }
        if (res.body.success === false) {
          this.errorMessage = res.body.message;
        }
      });
    }
  }

  forgetPassword() {
    this.dialogRef.close({
      type: 'forget',
      email: this.loginForm.get('emailFormControl')?.value,
    });
  }
}
