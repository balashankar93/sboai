import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsk',
  templateUrl: './bsk.component.html',
  styleUrls: ['./bsk.component.scss','../home/home.component.scss']
})
export class BskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNavigate(url){
        // your logic here.... like set the url 
   // const url = 'https://zfrmz.in/0F2AEQXcnTMiQhqLJvcj';
   window.open(url, '_blank');
  }

}
