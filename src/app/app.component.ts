import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCharts';
  chart=[]
  pie: any
  doughnut: any

  ngOnInit() {
  }
}
