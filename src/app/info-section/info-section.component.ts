import { Component, OnInit, AfterContentInit  } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss', '../app.component.scss']
})
export class InfoSectionComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax( scene, {
      relativeInput: true,
      hoverOnly: false
    });
  }
}
