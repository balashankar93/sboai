import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-papers',
  templateUrl: './call-papers.component.html',
  styleUrls: ['./call-papers.component.scss','../bsk/bsk.component.scss','../home/home.component.scss']
})
export class CallPapersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onNavigate(url){
    // your logic here.... like set the url 
   // const url = 'https://zfrmz.in/0F2AEQXcnTMiQhqLJvcj';
   // window.open(url, '_blank');

   alert('Portal has been closed');
}
}
