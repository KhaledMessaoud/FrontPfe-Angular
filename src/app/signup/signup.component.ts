import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any={"nom":"","email":"", "username":"","password":"","organisation":"", "role":[{"id":"2"}]}

  constructor(private gest:GestionService) { }

  ngOnInit(): void {
   
  }
  save(){ this.gest.save(this.user).subscribe({

    next:(data:any)=>{
      console.log(data)},
    error:(err:any)=>{alert("Alert compte introuvable")},
    complete:()=>{}
  })}
  
}
