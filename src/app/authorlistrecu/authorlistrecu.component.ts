import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-authorlistrecu',
  templateUrl: './authorlistrecu.component.html',
  styleUrls: ['./authorlistrecu.component.css']
})
export class AuthorlistrecuComponent implements OnInit {
  user:any={"id":0,"nom":"","email":"","password":"","organisation":"","username":"","role":""}

  mails:any=[];
  constructor(private gest:GestionService, private rout:Router) {
    this.user=localStorage.getItem("u1");
    this.user=JSON.parse(this.user);
   }

  ngOnInit(): void {
    console.log(this.user.id)
    this.getMessagesRecus();
  }

  getMessagesRecus(){
    this.gest.getMessageRecus(this.user.id).subscribe(
      {
        next: (data:any) => {this.mails=data;
        console.log(data)
      },
      error: (err:any) => {console.log(err)},
      complete: () => { }
      }
    )
  }

  deconnecter(){
    localStorage.clear();
    window.location.replace('login')
  }
}
