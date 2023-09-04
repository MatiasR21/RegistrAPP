import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  cambiar() { 
    this.router.navigate(['cambio-pass']);
}
}
