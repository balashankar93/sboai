import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { CssPageComponent } from './css-page/css-page.component';
import { JavascriptPageComponent } from './javascript-page/javascript-page.component';
import { HtmlExampleComponent } from './html-example/html-example.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AbstractComponent } from './abstract/abstract.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AwardComponent } from './award/award.component';
import { CommitteeComponent } from './committee/committee.component';
import { ProgramComponent } from './program/program.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { RegisterComponent } from './register/register.component';
import { AwardUniversityComponent } from './award-university/award-university.component';
import { SbaoiAwardComponent } from './sbaoi-award/sbaoi-award.component';
import { ChandraAwardComponent } from './chandra-award/chandra-award.component';
import { ScheduleComponent } from './schedule/schedule.component';



const routes: Routes = [
  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
  {
  path:"home",
  component:HomeComponent
},
{
  path:"contact-us",
  component:ContactUsComponent,
},
{
  path:"award",
  component:AwardComponent,
},
{
  path:"committee",
  component:CommitteeComponent,
},
{   path:"htmlExample",
    component:HtmlExampleComponent
},

 {
      path:"award-university",
      component:AwardUniversityComponent
},
{
  path:"sbaoi-award",
  component:SbaoiAwardComponent,
},
{
  path:"schedule",
  component:ScheduleComponent,
},
    {   path:"chandra-award",
    component:ChandraAwardComponent
},
{
  path:"cssPage",
  component:CssPageComponent
},
{
      path:"javascriptPage",
      component:JavascriptPageComponent
},
{
  path:"program",
  component:ProgramComponent,
},
{
  path:"speaker",
  component:SpeakerComponent,
},

{
  path:"register",
  component:RegisterComponent,
},
{
  path:"abstract",
  component:AbstractComponent,
},
{
  path:"about-us",
  component:AboutUsComponent,
  // children:[
  //   {
  //     path:"wrongPswd",
  //     component:WrongPswdComponent
  //   }
  // ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
