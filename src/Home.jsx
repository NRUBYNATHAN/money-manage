import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Chart1 from "react-apexcharts";
import { Carousel } from "./Carousel";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";

export function Home() {



  const [options,setObject]=useState({
   
      chart: {
        id: "basic-bar"
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
       const categorie=[];
      axios.get(
            "https://money-manage-back.vercel.app/income"
          ).then(response =>{
            
            response.data.map(item=>{
              
                date.push(item.date);
                amount.push(item.amount)
                categorie.push(item.categories)
                
               
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
            
          }).catch(e=>{
            alert(e)
          })
          setPie(
            {
              options: {},
              series: [65,43,21,22,73],
              
              labels:categorie,
            }
          )
          
        
      },[]);

  
  const [object,setObjects]=useState({
   
    chart1: {
      id: "basic-bar"
    },
    xaxis: {
      categories: []
    }
  
})
  const [serial,setSerial] = useState([{
    
      name: "expense",
      data: []
    } ] )

    useEffect(() => {
      const date1=[];
      const amount1=[];
      
    axios.get(
          "https://money-manage-back.vercel.app/expense"
        ).then(response =>{
          
          response.data.map(item=>{
            
         
              date1.push(item.date);
              amount1.push(item.amount)
          })
          setObjects({
 
            chart1: {
              id: "basic-bar"
            },
            xaxis: {
              categories: date1
            }
          
        })
        setSerial([{
    
          name: "expense",
          data: amount1
        } ] )
          
        }).catch(e=>{
          alert(e)
        })
     
    },[]);





  const [pie,setPie]=useState( {
    options: {},
    series: [65,43,21,22,73],
    
    labels: []
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
          <p className="let">$1542</p>
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




    <h2>Total Incomes & Expense</h2>

    <div className="chart">
      
      <div>
        <h1>Income</h1>
          <Chart
              options={options}
              series={series}
              type="area"
              width={750}
              height={500}
            />

      </div>
      <div>
        <h1>Expense</h1>
        <Chart1
              options={object}
              series={serial}
              type="area"
              width={750}
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


