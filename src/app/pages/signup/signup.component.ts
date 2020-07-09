import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private Route:Router,
    private Toastr:ToastrService,
    private auth : AuthService
  ) { }

  ngOnInit(): void {
  }

  handleSubmit=(f:NgForm)=>{
    const {email,password} = f.form.value;
    //Validation
    this.auth.signUp(email,password)
    .then((resp)=>{
      this.Route.navigateByUrl("/");
      this.Toastr.success("Sign Up Sucessfully");
    })
    .catch((error)=>{
      this.Toastr.error("Failed to sign up.");
      console.log(error);
    });

  }

}
