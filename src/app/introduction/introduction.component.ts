import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {

  }

  openLinkedIn(): void {
     window.open('https://www.linkedin.com/in/lucasrodriguess/');
  }

  openGitHub(): void {
    window.open('https://github.com/rodriguesl3');
  }
}
