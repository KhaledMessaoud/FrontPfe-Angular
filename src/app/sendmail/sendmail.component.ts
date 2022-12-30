import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
  users:any=[]
  user:any={"id":0,"nom":"","email":"", "username":"","password":"","organisation":"", "role":""}
  message:any={
    "sujet":"",
    "contenu":"",
    "user_send": {"id":0,"nom":"","email":"", "username":"","password":"","organisation":"", "role":""},
    "user_receive": {"id":0,"nom":"","email":"", "username":"","password":"","organisation":"", "role":""}
  }

  constructor(private gest:GestionService ,private route:Router) {
    this.user=localStorage.getItem("u1");
    this.user=JSON.parse(this.user);
    this.message.user_send=this.user;
    this.gest.getall().subscribe(
      {
        next : (data:any)=>{this.users=data; console.log(data)},
        error: (err:any) => {}
        
      }
    )
   }

  ngOnInit(): void {
  }

  sendmail(){
    this.gest.sendMessage(this.message).subscribe(
      {
        next:(data:any)=>{this.route.navigate(['home'])},
        error:(err:any)=>{}
      }
    )
  }

  deconnecter() {
    localStorage.clear();
    window.location.replace('login')
  }

}
