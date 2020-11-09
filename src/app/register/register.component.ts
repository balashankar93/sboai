import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../home/home.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadFile(fileUrl: string, fileName: string) {
    FileSaver.saveAs(fileUrl, fileName);
  }

  onNavigate(url) {
    window.open(url, '_blank');
  }

}
