import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
    this.auth.signIn(email,password)
    .then((resp)=>{
      this.Route.navigateByUrl("/");
      this.Toastr.success("Sign In Sucessfully");
    })
    .catch((error)=>{
      this.Toastr.error("Failed to sign in.");
      console.log(error);
    });

  }
}
