import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  
  iit_delhi_lat = 28.545011;
  iit_delhi_lng =77.192623;
  iit_delhi_icon ='assets/images/logo/iit-delhi.png';
  iit_delhi_marker ='assets/images/map_marker/blue-dot.png';


  iit_bangalore_lat = 13.0222347;
  iit_bangalore_lng =77.567183247;
  iit_bangalore_icon ='assets/images/logo/iit-delhi.png';
  iit_bangalore_marker ='assets/images/map_marker/red-dot.png';


  lat2 = 10.998221;
  lng2 = 76.962769;

  lat3 = 26.199004;
  lng3 = 91.693962;


  lat4 = 15.608191;
  lng4 = 78.935230;

  previous;

  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }
  ngOnInit() {

  }

  onNavigate(url){
    // your logic here.... like set the url 
   // const url = 'https://zfrmz.in/0F2AEQXcnTMiQhqLJvcj';
    window.open(url, '_blank');
}


}
