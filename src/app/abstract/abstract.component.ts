import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.scss']
})
export class AbstractComponent implements OnInit {
  filmIcon = faFilm;
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
