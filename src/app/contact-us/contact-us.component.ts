import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  

center_lat = 21.562128;
center_lng =80.899625;

marker_data : any = 
  
  [

  {
    title : "Indian Institute of Science",
    website:'https://www.iisc.ac.in/',
    lat : 13.0222347,
    lng :77.567183247,
    official_icon : 'assets/images/links/iis.png',
    marker_icon : 'assets/images/map_marker/red-dot.png',
    nickname: "IISC",
    city: "Bangalore"
  },

  {
    title : "Bharathiar University",
    website:'https://www.b-u.ac.in/',
    lat : 11.039853,
    lng :76.879086,
    official_icon : 'assets/images/links/bu.png',
    marker_icon : 'assets/images/map_marker/green-dot.png',
    nickname: "Bu",
    city: "Coimbatore"
  }, 

  {
    title : "Indian Institude of Technology",
    website:'https://home.iitd.ac.in/',
    lat : 28.545011,
    lng :77.192623,
    official_icon : 'assets/images/links/iitd.png',
    marker_icon : 'assets/images/map_marker/pink-dot.png',
    nickname: "IIT",
    city: "Delhi"
  } , 

  {
    title : "Indian Institude of Technology",
    website:'https://www.iitg.ac.in/',
    lat : 26.187719,
    lng :91.691567,
    official_icon : 'assets/images/links/iitg.png',
    marker_icon : 'assets/images/map_marker/blue-dot.png',
    nickname: "IIT",
    city: "Guwahati"
  },

  {
    title : "University of Madras",
    website:'https://www.unom.ac.in/',
    lat : 13.066111,
    lng :80.282707,
    official_icon : 'assets/images/links/unom.png',
    marker_icon : 'assets/images/map_marker/purple-dot.png',
    nickname: "Unom",
    city: "Chennai"
  } 


];





  ngOnInit() {

  }

  onNavigate(url){

    window.open(url, '_blank');
}


}
