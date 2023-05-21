import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Carousel } from "./Carousel";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
export function Home() {

  // const [state,setState]=useState({
  //   options: {
  //     chart: {
  //       id: "basic-bar"
  //     },
  //     xaxis: {
  //       categories: [2018, 2019, 2020, 2021, 2022, 2023]
  //     }
  //   },
  //   series: [
  //     {
  //       name: "income",
  //       data: [300, 500, 450, 500, 490, 600]
  //     },
  //     {
  //       name: "expense",
  //       data: [200, 350, 465, 400, 239, 400]
  //     }
  //   ]
  // })


  const [options,setObject]=useState({
   
      chart: {
        id: "apexchart-example"
      },
      xaxis: {
        categories: []
      }
    
  })
    const [series,setSeries] = useState([{
      
        name: "income",
        data: []
      } ] )

      useEffect(() => {
        const date=[];
        const amount=[];
      axios.get(
            "https://money-manage-back.vercel.app/income"
          ).then(response =>{
            console.log(response)
            response.data.map(item=>{
              console.log("item",item)
                date.push(item.date);
                amount.push(item.amount)
            })
            setObject({
   
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: date
              }
            
          })
          setSeries([{
      
            name: "income",
            data: amount
          } ] )
            console.log("date",date,amount)
          }).catch(e=>{
            alert(e)
          })
        
      },[]);





  const [pie,setPie]=useState( {
    options: {},
    series: [44, 55, 41, 17, 15],
    
    labels: ['A', 'B', 'C', 'D', 'E']
  })
  const [pie1,setPie1]=useState( {
    options: {},
    series: [34, 45, 31, 27, 25],
    
    labels: ['A', 'B', 'C', 'D', 'E']
  })

  const images = [
    { id: 1, url: 'https://www.forbes.com/advisor/wp-content/uploads/2022/03/Image_-_Business_Analyst_.jpeg-900x510.jpg', alt: 'Image 1' },
    { id: 2, url: 'https://media.kare11.com/assets/KARE/images/92367361-dda6-48e7-b3cb-c2afa9f6f234/92367361-dda6-48e7-b3cb-c2afa9f6f234_1920x1080.jpg', alt: 'Image 2' },
    { id: 3, url: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/09/cybersecurity_analyst.jpeg.jpg', alt: 'Image 3' },
  ];
  
  
  return (
    <div>
      <Carousel images={images} />
    <div className="top">
      <div className="box1">
        <h2 className="let1">Yearly wise</h2>
        <div className="box1_1">
          <p className="let">income</p>
          <p className="let">expense</p>
        </div>
        <div className="box1_1">
          <p className="let">$1234</p>
          <p className="let">$113</p>
        </div>
      </div>
      <div className="box2">
        <h2 className="let1">Monthly wise</h2>
        <div className="box1_1">
          <p className="let">income</p>
          <p className="let">expense</p>
        </div>
        <div className="box1_1">
          <p className="let">$534</p>
          <p className="let">$23</p>
        </div>
      </div>
      <div className="box3">
        <h2 className="let1">Weekly wise</h2>
        <div className="box1_1">
          <p className="let">income</p>
          <p className="let">expense</p>
        </div>
        <div className="box1_1">
          <p className="let">$234</p>
          <p className="let">$13</p>
        </div>
      </div>
     
    </div>






    <div className="chart">
      <h2>Total Incomes & Expense</h2>
<div>
      <Chart
              options={options}
              series={series}
              type="area"
              width={1000}
              height={500}
            />
     </div>
      </div>








      <div className="pie">
      <div>
        <h2>Income By Catagory</h2>
        <div className="catagory">
        <p className="co1">salary</p> 
        <p className="co2">ad</p> 
        <p className="co3">sales</p> 
        <p className="co4">web host</p> 
        <p className="co5">software</p> 
        </div>
       
      <Chart options={pie.options} series={pie.series} type="donut" width="580" />
      </div>
      <div>
      <h2>Expense By Catagory</h2>
      <div className="catagory">
        <p className="co1">rent</p> 
        <p className="co2">loan</p> 
        <p className="co3">food</p> 
        <p className="co4">market</p> 
        <p className="co5">internet</p> 
        </div>
      <Chart options={pie1.options} series={pie1.series} type="donut" width="580" />
      </div>
      </div>
    </div>
  );
}


