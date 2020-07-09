import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email:string=null;
  constructor(private auth:AuthService,
    private toastr:ToastrService,
    private Route:Router
    ) {
      this.auth.getUser().subscribe((user)=>{
      this.email=user?.email;
    });
  }

  ngOnInit(): void {
   
  }

   signOut=async()=>{
   try {
    const resp =await this.auth.signOut();
    this.Route.navigateByUrl("/signin");
    this.email=null;
    this.toastr.info("Login again");
   } catch (error) {
     this.toastr.error("Something went wrong.")
   }
  }

}
