import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: any = { "id": 0, "nom": "", "email": "", "password": "", "organisation": "", "username": "", "role": "" }

  constructor(private gest: GestionService, private rout: Router) {
    this.user = JSON.parse(localStorage.getItem("userupdate")!)
    console.log(this.user)
  }

  ngOnInit(): void {
  }

  update() {
    this.gest.updateuser(this.user).subscribe({

      next: (data: any) => {
        console.log(data)
      },
      error: (err: any) => { console.log(err) },
      complete: () => { }
    })
  }



  deconnecter() {
    localStorage.clear();
    window.location.replace('login')
  }
}
