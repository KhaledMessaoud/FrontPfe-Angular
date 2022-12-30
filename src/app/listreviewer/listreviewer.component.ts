import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-listreviewer',
  templateUrl: './listreviewer.component.html',
  styleUrls: ['./listreviewer.component.css']
})
export class ListreviewerComponent implements OnInit {

  constructor(private gest:GestionService, private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("RoleActif")!="Reviewer"){
      this.route.navigate(["home"])
    }
  }

  deconnecter(){
    localStorage.clear();
    window.location.replace('login')
  }

}
