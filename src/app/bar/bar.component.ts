import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let barChart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Bar Chart'
        },
      },
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November', 'December'],
        datasets: [
          {
            type: 'bar',
            label: 'Females days of illness ',
            data: [10, 20, 30, 10,50, 18, 25, 40, 70, 33,13,6],
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
          {
            type: 'bar',
            label: 'Males days of illness ',
            data: [10, 20, 30, 10,50, 18, 25, 40, 70, 33,13,6].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          },
        ]
      }
    })
  }

}
