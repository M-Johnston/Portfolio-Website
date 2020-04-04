import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit  {
  title = 'cvportfolio';

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: false
    });
  }
}
