import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from '../user.model';
import { NotificationService } from 'src/app/share/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private ns: NotificationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required)
    })

  }

  login() {
    
    
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (user: User) => this.ns.notify("Login com Sucesso!"),
         errorResponse => this.ns.notify(errorResponse.error.message),
        ()=>{
          let navigateTo= this.route.snapshot.params.page;
         // alert(navigateTo);
          this.router.navigate([navigateTo ])
         
        }
      )
  }

}
