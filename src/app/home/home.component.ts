import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeimg:string="../assets/images/edu1.jpg";

  constructor(private router: Router) { }

  ngOnInit() {

    alert("Abstract submission date has been extended...");
  }

  onNavigate(url){
    // your logic here.... like set the url 
   // const url = 'https://zfrmz.in/0F2AEQXcnTMiQhqLJvcj';
    window.open(url, '_blank');
}

onRedirect(){
  this.router.navigate(['/register'])

}



}
