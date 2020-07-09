import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
//https://api.github.com/users/khushalrasali
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  URL:string="https://api.github.com/users/";
  constructor(private http:HttpClient) { }

  getUserDetails=(username:string)=>{
   return this.http.get(`https://api.github.com/users/${username}`);
  }

  getRepos=(repoURL:string)=>{
    return this.http.get(repoURL);
  }

  
}
