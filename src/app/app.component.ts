import {Component, OnInit, AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import * as Parallax from 'parallax-js';
import {Router, RouterOutlet} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {zoomIn} from './router-animations';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [zoomIn]
})
export class AppComponent implements OnInit {
  title = 'cvportfolio';
  scrollCount = 0;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    $(document).ready(() => {
      $('#toggle').click(() => {
        console.log('click');
        $().toggleClass('active');
        $('#overlay').toggleClass('open');
      });
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.scrollCount += 1;
      console.log('scroll down', this.scrollCount);
      this.router.navigate(['/info']);
    } else {
      if (this.scrollCount > 0) {
        this.scrollCount -= 1;
        console.log('scroll up', this.scrollCount);
      } else {
        //navigate home
        this.router.navigate(['/home']);
      }
    }
  }
}
