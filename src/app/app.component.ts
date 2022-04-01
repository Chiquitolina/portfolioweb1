import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fader, slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader, slideInAnimation]
})
export class AppComponent {




  prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

  constructor(
    public router: Router,
  ) {}

  ngOnInit() {


  }


  /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof MyComponent
   */
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
  
