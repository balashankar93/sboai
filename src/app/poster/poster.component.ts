import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  //  document.querySelector('body').classList.add('login');


  }

  
onRedirect(){
  this.router.navigate(['/home'])

}

ngAfterViewInit() {

  console.log("ghgh");
}

ngOnDestroy() {
 // document.querySelector('body').classList.remove('login');
}

}
