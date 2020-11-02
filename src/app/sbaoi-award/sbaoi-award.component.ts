import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sbaoi-award',
  templateUrl: './sbaoi-award.component.html',
  styleUrls: ['./sbaoi-award.component.scss']
})
export class SbaoiAwardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRedirect(){
    this.router.navigate(['/chandra-award'])

  }

}
