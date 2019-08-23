import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { DoughnutsDataService } from '../doughnuts-data.service'

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  policies: any[] = [];

  constructor(private doughnutsData: DoughnutsDataService) { }

  ngOnInit() {
    
    this.doughnutsData.getData()
      .subscribe((res : any[]) => {
        console.log(res)
        let number = res.map(res => res.num);
        console.log(number)


    let doughnutChart = new Chart('doughnut', {
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Doughnut Chart'
        }, legend: {
          position: 'top',
        },animation: {
          animateScale: true,
          animateRotate: true
        } 
      },
      data: {
        labels: ['Computers', 'Monitors', 'Phones', 'Server'],
        datasets: [
          {
            label: 'Points',
            backgroundColor: ['ff0000','#e67e22','#f1c40f','#16a085','#2980b9'],
            
            data: number
          }
        ]
      }
    })

  })

  }
}
