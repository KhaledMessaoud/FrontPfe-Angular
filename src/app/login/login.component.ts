import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any={};
  user:any={"id":0,"nom":"","email":"","password":"","organisation":"","username":"","role":""}
  constructor(private gest:GestionService, private rout:Router) { }

  ngOnInit(): void {
    this.user=localStorage.getItem("u1");
    if(this.user!=null){
      this.rout.navigate(["home"]);
    }
  }

  login( ){
    this.gest.login(this.form).subscribe({

      next:(data:any)=>{
        localStorage.setItem("roles",JSON.stringify(data.role))
        console.log(data)
        for(var i in data.role){
          if(data.role[i].libelle=="Admin"){
            console.log("right me")
          localStorage.setItem("RoleActif",data.role[i].libelle)
         window.location.replace('home')
          }

          if(data.role[i].libelle=="Author"){
            console.log("right me")
          localStorage.setItem("RoleActif",data.role[i].libelle)
         window.location.replace('home')
          }

          if(data.role[i].libelle=="Reviewer"){
            console.log("right me")
          localStorage.setItem("RoleActif",data.role[i].libelle)
         window.location.replace('home')
          }
        }
        localStorage.setItem("token",data.token)
        localStorage.setItem("u1", JSON.stringify(data))
        window.location.replace('home')
        console.log(data)},
      error:(err:any)=>{alert("Alert compte introuvable")},
      complete:()=>{}
    })
  }
  getall(){
    this.gest.getall().subscribe({

      next:(data:any)=>{
        console.log(data)},
      error:(err:any)=>{alert("Alert compte introuvable")},
      complete:()=>{}
    })
  }

}
