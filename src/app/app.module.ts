import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { CssPageComponent } from './css-page/css-page.component';
import { JavascriptPageComponent } from './javascript-page/javascript-page.component';
import { HtmlExampleComponent } from './html-example/html-example.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AbstractComponent } from './abstract/abstract.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommitteeComponent } from './committee/committee.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { AwardComponent } from './award/award.component';
import { ProgramComponent } from './program/program.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AwardUniversityComponent } from './award-university/award-university.component';
import { SbaoiAwardComponent } from './sbaoi-award/sbaoi-award.component';
import { ChandraAwardComponent } from './chandra-award/chandra-award.component';
//import { AgmCoreModule } from '@agm/core';
//import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtmlComponent,
    CssPageComponent,
    JavascriptPageComponent,
    HtmlExampleComponent,
    AboutUsComponent,
    AbstractComponent,
    ContactUsComponent,
    CommitteeComponent,
    SpeakerComponent,
    AwardComponent,
    ProgramComponent,
    RegisterComponent,
    AwardUniversityComponent,
    SbaoiAwardComponent,
    ChandraAwardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  /*   AgmCoreModule.forRoot({
     apiKey: 'AIzaSyCFtn7jtqOoo77OUXlP2y4Ukj4Nfv_-cKY'
   }),
   AgmSnazzyInfoWindowModule 
   */],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
