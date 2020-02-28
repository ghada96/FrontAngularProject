import {Component, OnInit} from '@angular/core';

import {Chart} from 'chart.js';
import {ProductService} from "../product.service";
import {SaleService} from "../sale.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  labels=[];
  quantities=[];
  chart=[];
  doughnut:any;
  pie:any;
  squantity=[];
  productsname=[];
  constructor(private productService: ProductService,private saleService:SaleService) { }

  ngOnInit() {
      this.getdata();
      this.createSamplechart();
      this.getSaleChart();
  }

getdata(){
  this.productService.getProductsList()
    .subscribe(
      (data:any) => {
        console.log(data);
        data.forEach(e =>
          {
            this.labels.push(e.name)
            this.quantities.push(e.quantity)
          }
        );
        console.log(this.labels);
        console.log(this.quantities);
       this.createProductchart()
      },
      error => console.log(error));
}

  getSaleChart() {
    this.saleService.getSalesList()
      .subscribe(
        (data:any) => {
          console.log(data);
          data.forEach(e =>
            {
              this.productsname.push(e.product.name)
              this.squantity.push(e.quantity)
            }
          );
          console.log(this.productsname);
          console.log(this.squantity);
          this.createSalechart();
        },
        error => console.log(error));





}

createSalechart(){
  this.doughnut =  new Chart('salechart',{
    type: 'doughnut',
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Best sellers Doughnut Chart '
      },legend: {
        position: 'top',
      },animation: {
        animateScale: true,
        animateRotate: true
      }
    },
    data: {
      datasets: [{
        data: this.squantity,
        backgroundColor: ["red","orange","yellow","green","blue"],
        label: 'Dataset 1'
      }],
      labels: this.productsname
    }
  })

}
createProductchart(){
  let myChart = document.getElementById('myChart');

  let massPopChart = new Chart(myChart, {
    type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:this.labels,
      datasets:[{
        label:'Products',
        data:this.quantities,
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      title:{
        display:true,
        text:'our stock products ',
        fontSize:25
      },
      legend:{
        display:true,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:50,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }
    }
  });
}
createSamplechart(){
  this.doughnut =  new Chart('doughnut',{
    type: 'doughnut',
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Doughnut Chart'
      },legend: {
        position: 'top',
      },animation: {
        animateScale: true,
        animateRotate: true
      }
    },
    data: {
      datasets: [{
        data: [45,10,5,25,15],
        backgroundColor: ["red","orange","yellow","green","blue"],
        label: 'Dataset 1'
      }],
      labels: ['Red','Orange','Yellow','Green','Blue']
    }
  })

  this.pie =  new Chart('pie',{
    type: 'pie',
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'pie Chart'
      },legend: {
        position: 'top',
      },animation: {
        animateScale: true,
        animateRotate: true
      }
    },
    data: {
      datasets: [{
        data: [45,10,5,25,15],
        backgroundColor: ["red","orange","yellow","green","blue"],
        label: 'Dataset 1'
      }],
      labels: ['Red','Orange','Yellow','Green','Blue']
    }
  })
    this.chart=new Chart('canvas',{
      type:'line',
      data:{
        labels:this.productsname,
        datasets: [{
          label:'selled quantity ',
          data:this.squantity,
          backgroundColor:'red',
          borderColor:'red',
          fill:false

        },
          {
            label:'stock quantity ',
            data:this.quantities,
            backgroundColor:'blue',
            borderColor:'blue',
            fill:false

          }]
      }

    })
  let options = {
    // aspectRatio: 1,
    // legend: false,
    tooltips: false,

    elements: {
      point: {
        borderWidth: function (context) {
          return Math.min(Math.max(1, context.datasetIndex + 1), 8);
        },
        hoverBackgroundColor: 'transparent',
        hoverBorderColor: function (context) {
          return "red";
        },
        hoverBorderWidth: function (context) {
          var value = context.dataset.data[context.dataIndex];
          return Math.round(8 * value.v / 1000);
        },
        radius: function (context) {
          var value = context.dataset.data[context.dataIndex];
          var size = context.chart.width;
          var base = Math.abs(value.v) / 1000;
          return (size / 24) * base;
        }
      }
    }
  };

  new Chart('bubble', {
    type: 'bubble',
    options: options,
    data: {
      datasets: [
        {
          backgroundColor: 'rgba(255,0,0,0.4)',
          label: 'Name 1',
          data: [{
            x: 50,
            y: 60,
            v: 200
          },{
            x: 50,
            y: 80,
            v: 700
          },{
            x: 80,
            y: 60,
            v: 100
          },{
            x: 60,
            y: 60,
            v: 500
          },{
            x: 90,
            y: 80,
            v: 800
          }]
        },{
          backgroundColor: 'rgba(0,255,0,0.4)',
          label: 'Name 2',
          data: [{
            x: 60,
            y: 20,
            v: 200
          },{
            x: 55,
            y: 70,
            v: 800
          }, {
            x: 80,
            y: 30,
            v: 500
          },{
            x: 70,
            y: 40,
            v: 800
          }]}]
    }
  })

}

}
