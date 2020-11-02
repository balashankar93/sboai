import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeimg:string="../assets/images/edu1.jpg";

  constructor() { }

  ngOnInit() {
  }

  onNavigate(url){
    // your logic here.... like set the url 
   // const url = 'https://zfrmz.in/0F2AEQXcnTMiQhqLJvcj';
    window.open(url, '_blank');
}

}
