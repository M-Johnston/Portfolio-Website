import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Parallax from 'parallax-js';
import {Scroll} from '@angular/router';

@Component({
  selector: 'app-home-circular',
  templateUrl: './home-circular.component.html',
  styleUrls: ['./home-circular.component.scss']
})
export class HomeCircularComponent implements OnInit, AfterContentInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: false
    });
  }
}
