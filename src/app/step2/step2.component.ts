import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;

  fileInfos?: Observable<any>;




  constructor(private gest: GestionService) { }

  ngOnInit(): void {
    this.fileInfos = this.gest.getarticles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.gest.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.fileInfos = this.gest.getarticles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }

  deconnecter() {
    localStorage.clear();
    window.location.replace('login')
  }

}
