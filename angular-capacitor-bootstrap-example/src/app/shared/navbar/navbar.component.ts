import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private router: Router) {}

  onHomeClick() {
    this.router.navigate(['/dashboard']);
    // examples for URIs
    // startupscheune.de
    // startupscheune.de/events
    // startupscheune.de/events/1
    // startupscheune.de/profile

  }
}
