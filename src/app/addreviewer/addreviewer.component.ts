import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-addreviewer',
  templateUrl: './addreviewer.component.html',
  styleUrls: ['./addreviewer.component.css']
})
export class AddreviewerComponent implements OnInit {
  user:any={"nom":"","email":"", "username":"","password":"","organisation":"", "role":[{"id":"3"}]}

  constructor(private gest:GestionService, private route:Router) { }

  ngOnInit(): void {
  }

  save(){ this.gest.save(this.user).subscribe({

    next:(data:any)=>{
      console.log(data)},
    error:(err:any)=>{alert("Alert compte introuvable")},
    complete:()=>{}
  })}

  deconnecter(){
    localStorage.clear();
    window.location.replace('login')
  }
}
