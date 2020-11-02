import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SBOAI';
  onNavigate(url){
    // your logic here.... like set the url 
   // const url = 'https://zfrmz.in/0F2AEQXcnTMiQhqLJvcj';
    window.open(url, '_blank');
}
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "highlight") {
    x.className += " responsive";
  } else {
    x.className = "highlight";
  }
}