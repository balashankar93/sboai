import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BootstrapModalComponent } from '../bootstrap-modal/bootstrap-modal.component';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeimg:string="../assets/images/edu1.jpg";

  constructor(private router: Router,public matDialog: MatDialog) { }

  ngOnInit() {

  //  alert("Abstract submission date has been extended...");
  this.openModal();
  }

 
  downloadFile(fileUrl: string, fileName: string) {
    FileSaver.saveAs(fileUrl, fileName);
  }

  openAlert(){

    alert("Portal has been closed");

  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
   /*  dialogConfig.height = "55%";
    dialogConfig.width = "50%"; */
  /*   dialogConfig.height = "460px";
    dialogConfig.width = "600px"; */
    dialogConfig.height = "300px";
    dialogConfig.width = "600px";
   
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(BootstrapModalComponent, dialogConfig);
  }


  

  onNavigate(url){
    // your logic here.... like set the url 
   // const url = 'https://zfrmz.in/0F2AEQXcnTMiQhqLJvcj';
    window.open(url, '_blank');
}

onRedirect(){
  this.router.navigate(['/register'])

}

onRedirectCallPapers(){
  this.router.navigate(['/call-papers'])

}

ngAfterViewInit() {
  


}




}
