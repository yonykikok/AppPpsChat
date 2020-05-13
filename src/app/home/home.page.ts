import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Input() error: string = "";

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }
  redireccionar(aula) {
    this.authService.currentUser.aula=aula;
    this.router.navigateByUrl('/admin');
  }



}
