import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss']
})
export class BootstrapModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BootstrapModalComponent>) { }
  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
