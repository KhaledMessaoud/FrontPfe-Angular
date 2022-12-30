import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  user:any={"id":0,"nom":"","email":"","password":"","organisation":"","username":"","role":""}
  users: any=[];
  roles:any=[];

  constructor(private gest:GestionService,private route:Router) {
    this.user=localStorage.getItem("u1");
    this.user=JSON.parse(this.user);
   }

  ngOnInit(): void {
    console.log(this.user.id)
    this.getall();
  }

  getroles(){
    this.gest.getroles().subscribe({

      next:(data:any)=>{this.roles =data ;
        console.log(data)},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }

  getall(){
    this.gest.getall().subscribe({

      next:(data:any)=>{this.users =data ;
        console.log(data)},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }

  update(user:any){
    localStorage.setItem("userupdate",JSON.stringify(user))
    this.route.navigate(["updateuser"])
  }

  deconnecter(){
    localStorage.clear();
    window.location.replace('login')
  }
}
