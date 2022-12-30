import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListauthorComponent } from './listauthor/listauthor.component';
import { ListreviewerComponent } from './listreviewer/listreviewer.component';
import { AdminComponent } from './admin/admin.component';
import { ListsentComponent } from './listsent/listsent.component';
import { StartsubComponent } from './startsub/startsub.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ListenvoyeadminComponent } from './listenvoyeadmin/listenvoyeadmin.component';
import { ListrecuadminComponent } from './listrecuadmin/listrecuadmin.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AddreviewerComponent } from './addreviewer/addreviewer.component';
import { ListarticleComponent } from './listarticle/listarticle.component';
import { AuthorlistsentComponent } from './authorlistsent/authorlistsent.component';
import { AuthorlistrecuComponent } from './authorlistrecu/authorlistrecu.component';
import { ReviewlistsentComponent } from './reviewlistsent/reviewlistsent.component';
import { ReviewlistrecuComponent } from './reviewlistrecu/reviewlistrecu.component';
import { SendmailComponent } from './sendmail/sendmail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ListauthorComponent,
    ListreviewerComponent,
    AdminComponent,
    ListsentComponent,
    StartsubComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    AccountsComponent,
    ListenvoyeadminComponent,
    ListrecuadminComponent,
    UpdateuserComponent,
    AddreviewerComponent,
    ListarticleComponent,
    AuthorlistsentComponent,
    AuthorlistrecuComponent,
    ReviewlistsentComponent,
    ReviewlistrecuComponent,
    SendmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
