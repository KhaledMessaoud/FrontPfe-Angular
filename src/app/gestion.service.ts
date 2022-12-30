import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }

  login(form:any){
    return this.http.post('http://localhost:8080/auth/login',form);
  }

  save(form:any){
    return this.http.post('http://localhost:8080/auth/save',form);
  }

  getall(){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.get('http://localhost:8080/rest/users',{headers:hs});
  }

  userById(id:number){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.get('http://localhost:8080/rest/userById/'+id,{headers:hs});
  }

  updateuser(user : any){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    
    return this.http.post('http://localhost:8080/rest/updateUser',user,{headers:hs} )
  }

  getroles(){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.get('http://localhost:8080/rest/roles',{headers:hs});
  }

  delthem(id:number){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.delete('http://localhost:8080/rest/delthem/'+id,{headers:hs});
  }

  getthemes(){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.get('http://localhost:8080/rest/themes',{headers:hs});
  }

  sendMessage(message: any){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.post('http://localhost:8080/rest/sendMail',message,{headers:hs});
  }

  getMessageRecus(id:number){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.get('http://localhost:8080/rest/mailrecus/'+id,{headers:hs});
  }

  getMessageEnvoyes(id:number){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.get('http://localhost:8080/rest/mailsent/'+id,{headers:hs});
  }

  upload(file: File): Observable<HttpEvent<any>> {
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8080/rest/upload', formData, {
      headers:hs,
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getarticles() {
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.get('http://localhost:8080/rest/articles',{headers:hs});
  }

}
