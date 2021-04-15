import React from "react";
import Chart from 'react-apexcharts'
import { Grid, Divider, Typography, Paper,Card ,CardHeader} from "@material-ui/core";

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Child care',
        data: [2, 52, 280, 510, 420, 1050, 100]
      },
      {
        name: 'Seenior Care',
        data: [410, 600, 420., 510, 420, 900, 100]
      },{
        name: 'Special Needs',
        data: [210, 420, 280, 543, 420, 1020, 100]
      },{
        name: 'Transport',
        data: [510, 600, 280, 420, 432, 850, 100]
      }, ],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2020-09-19T00:00:00.000Z", "2020-10-19T01:30:00.000Z", "2020-11-19T02:30:00.000Z", "2020-12-19T03:30:00.000Z", "2021-01-19T04:30:00.000Z", "2021-02-19T05:30:00.000Z", "2021-03-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
      },
    
    
    };
  }



  render() {
    return (
      
<Card sx={{ height: '100%', borderRadius:3, boxShadow:12 }}>
<CardHeader title="Earning" />
<Divider />
<div id="chart">
<Chart options={this.state.options} series={this.state.series} type="area" height={350} />
</div></Card>)}}