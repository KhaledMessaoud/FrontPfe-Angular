import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-listauthor',
  templateUrl: './listauthor.component.html',
  styleUrls: ['./listauthor.component.css']
})
export class ListauthorComponent implements OnInit {

  articles: any=[];
  constructor(private gest:GestionService, private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("RoleActif")!="Author"){
      this.route.navigate(["home"])
    }
  }

  getall(){
    this.gest.getarticles().subscribe({

      next:(data:any)=>{this.articles =data ;
        console.log(data)},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }

  deconnecter(){
    localStorage.clear();
    window.location.replace('login')
  }

}
