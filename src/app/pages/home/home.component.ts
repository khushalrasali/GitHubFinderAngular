import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user =null;
  username :string;
  error:string;

  constructor(private github:GithubService,private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleSubmit=()=>{
    this.github.getUserDetails(this.username).subscribe((user)=>{
      this.user=user;
      this.error=null;
      console.log(user);
      //to detect changes
      this.ref.detectChanges();
    },
    (err)=>{
      this.user=null;
      this.error="User not found";
    });
  }

}
