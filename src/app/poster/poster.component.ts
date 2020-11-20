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
  }

  
onRedirect(){
  this.router.navigate(['/home'])

}

}
