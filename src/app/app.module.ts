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
import { AgmCoreModule } from '@agm/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';

import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { BskComponent } from './bsk/bsk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { PosterComponent } from './poster/poster.component';
import { OralPresentationComponent } from './oral-presentation/oral-presentation.component';
import { PostalPresentationComponent } from './postal-presentation/postal-presentation.component';
import { CallPapersComponent } from './call-papers/call-papers.component';

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
    ChandraAwardComponent,
    ScheduleComponent,
    BskComponent,
    BootstrapModalComponent,
    PosterComponent,
    OralPresentationComponent,
    PostalPresentationComponent,
    CallPapersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule,  
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFtn7jtqOoo77OUXlkj4Nfv_-cKY'
      //      apiKey: 'AIzaSyCFtn7jtqOoo77OUXlP2y4Ukj4Nfv_-cKY'

     //apiKey:'AIzaSyDbiqG-oOua70fAUWWcAQpG16uJnHumZ-0'
    }),
  
   AgmSnazzyInfoWindowModule,
  
   BrowserAnimationsModule 
  
 ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  entryComponents: [BootstrapModalComponent]
})
export class AppModule { }
