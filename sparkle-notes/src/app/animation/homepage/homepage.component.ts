import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animation-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class AnimationHomepageComponent {
  constructor(private router: Router){}

  routeToNotes(){
    this.router.navigate(['/note']);
  }
}
