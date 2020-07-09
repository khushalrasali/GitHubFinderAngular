import { Component, OnInit,Input,OnChanges,ChangeDetectorRef} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() repoUrl:string;
  repos=[];

  constructor(private github :GithubService,private toastr:ToastrService,private ref : ChangeDetectorRef) { 

  }

  ngOnInit(): void {
    this.github.getRepos(this.repoUrl).subscribe(
      (reposResp:[])=>{
        this.repos=reposResp;
        this.ref.detectChanges();
      },
      (err)=>{this.toastr.error("Error while fetching repos.");}
    );
  }

  ngOnChange():void{
    if(this.repoUrl){
      this.github.getRepos(this.repoUrl).subscribe(
        (reposResp:[])=>{
          this.repos=reposResp;
          this.ref.detectChanges();
        },
        (err)=>{this.toastr.error("Error while fetching repos.");}
      );
    }
  }

}
