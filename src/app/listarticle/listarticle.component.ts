import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class ListarticleComponent implements OnInit {
  articles: any=[];

  constructor(private gest:GestionService, private route:Router) { }

  ngOnInit(): void {
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
