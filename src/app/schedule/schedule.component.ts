import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss','../register/register.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() {
   }


  downloadFile(fileUrl: string, fileName: string) {
    FileSaver.saveAs(fileUrl, fileName);
  }
 
   dec_6 : any =[
     {
  
      title : "",
      name : "",
      start_time :"",
      end_time :"",


  }
];

dec_7 : any =[
  {

   title : "",
   name : "",
   start_time :"",
   end_time :"",


}
];


dec_8 : any =[
  {

   title : "",
   name : "",
   start_time :"",
   end_time :"",


}
];


dec_9 : any =[
  {

   title : "",
   name : "",
   start_time :"",
   end_time :"",


}
];
  ngOnInit() {

  
  }

}
