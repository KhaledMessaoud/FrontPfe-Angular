import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  user:any={"id":0,"nom":"","email":"","password":"","organisation":"","username":"","role":""}
  users: any=[];
  role:any=[];
  theme:any=[]

  constructor(private gest:GestionService,private route:Router) { 
    this.user=localStorage.getItem("u1");
    this.user=JSON.parse(this.user);

    
   }
  

  
  ngOnInit(): void {
    if(localStorage.getItem("RoleActif")!="Admin"){
      this.route.navigate(["home"])
    }
  }



  deconnecter(){
    localStorage.clear();
    window.location.replace('login')
  }

}
