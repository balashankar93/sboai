import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-postal-presentation',
  templateUrl: './postal-presentation.component.html',
  styleUrls: ['./postal-presentation.component.scss','../home/home.component.scss']
})
export class PostalPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadFile(fileUrl: string, fileName: string) {
    FileSaver.saveAs(fileUrl, fileName);
  }

}
