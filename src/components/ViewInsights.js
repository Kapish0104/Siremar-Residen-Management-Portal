/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/
import React from 'react'
import SuperAdminNavbar from './SuperAdminNavbar'
import Footer from './Footer'
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function Insights() {


  return (
    <>
    <div className="master-container">
        <SuperAdminNavbar/>
          <div className="user-welcome">             
            <span>
              View Insights
            </span>
          </div>

      <div className='chart1'>
         
              
      <Bar
        data={{
          labels: ['AlphaCounty', 'HeliaCounty', 'EosCounty'],
          datasets: [
            {
              label: 'Population in each county',
              barPercentage: 0.5,
              barThickness: 150,
              maxBarThickness: 500,
              minBarLength: 2,
              data: [2, 3 , 3,],
              backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(126, 51, 255)',
                'rgba(75, 192, 192)',
           
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(126, 51, 255, 1)',
                'rgba(75, 192, 192, 1)',
         
              ],
              borderWidth: 1,
            },
          
          ],
        }}
        height={400}
        width={100}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontStyle: 'bold',
                  fontColor: '#000',
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
    <Footer/>
      </div>     
      </>
  )
}