import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AddreviewerComponent } from './addreviewer/addreviewer.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorlistrecuComponent } from './authorlistrecu/authorlistrecu.component';
import { AuthorlistsentComponent } from './authorlistsent/authorlistsent.component';
import { HomeComponent } from './home/home.component';
import { ListarticleComponent } from './listarticle/listarticle.component';
import { ListauthorComponent } from './listauthor/listauthor.component';
import { ListenvoyeadminComponent } from './listenvoyeadmin/listenvoyeadmin.component';
import { ListrecuadminComponent } from './listrecuadmin/listrecuadmin.component';
import { ListreviewerComponent } from './listreviewer/listreviewer.component';
import { ListsentComponent } from './listsent/listsent.component';
import { LoginComponent } from './login/login.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SignupComponent } from './signup/signup.component';
import { StartsubComponent } from './startsub/startsub.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"listauthor", component:ListauthorComponent},
  {path:"listreviewer", component:ListreviewerComponent},
  {path:"admin", component:AdminComponent},
  {path:"updateuser", component:UpdateuserComponent},
  {path:"sent", component:ListsentComponent},
  {path:"accounts", component:AccountsComponent},
  {path:"sendmail", component:SendmailComponent},
  {path:"mailsentadmin", component:ListenvoyeadminComponent},
  {path:"mailrecievedadmin", component:ListrecuadminComponent},
  {path:"startsub", component:StartsubComponent},
  {path:"step1", component:Step1Component},
  {path:"step2", component:Step2Component},
  {path:"step3", component:Step3Component},
  {path:"step4", component:Step4Component},
  {path:"step5", component:Step5Component},
  {path:"step6", component:Step6Component},
  {path:"addreviewer", component:AddreviewerComponent},
  {path:"recuauthor", component:AuthorlistrecuComponent},
  {path:"sentauthor", component:AuthorlistsentComponent},
  {path:"articles", component:ListarticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
