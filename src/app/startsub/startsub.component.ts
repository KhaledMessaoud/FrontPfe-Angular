import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startsub',
  templateUrl: './startsub.component.html',
  styleUrls: ['./startsub.component.css']
})
export class StartsubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deconnecter(){
    localStorage.clear();
    window.location.replace('login')
  }
}
