import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
export default function Graph() {
    const [ data, setdata ] = useState(null);
    const [ options,setoptions] = useState(null);
    const [selecteddays, setSelecteddays] = useState(null);
    const days = [
        { name: 'Quarterly' },
        { name: 'Halfyearly' },
        { name: 'Yearly' },
    ];
 useEffect(()=>{
    const data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [
              60, 30, 90, 70, 80, 20, 70, 60, 40, 50, 20, 30, 40, 50, 60, 70, 80,
              90, 100,
            ],
            backgroundColor: "#F2F0FE",
            borderColor: "#F2F0FE",
            borderWidth: 1,
            borderRadius: 10,
            hoverBackgroundColor: "#5A32EB",
          },
        ],
      };
    
      const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            position: "bottom",
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
          },
        },
      };
      setoptions(options);
      setdata(data);
 },[]);

  return (
    <div className="card" style={{ position: "relative" ,width:'70%'}}>
        <p><b>Overview</b>
        
        <br/>
        Monthly Earnings
        </p>
        <Dropdown
                value={selecteddays}
                onChange={(e) => setSelecteddays(e.value)}
                options={days}
                optionLabel="name"
                placeholder="Quarterly"
                className="w-full md:w-14rem m-3"
                style={{ borderRadius: "5px", fontFamily: "sans-serif", fontSize: "3px",position: "absolute", top: '4px', right: '4px'}}
            />
  <Chart
    type="bar"
    data={data}
    options={options}
    // Adjusted gridRow and gridColumn
  />
  {/* Overlay to prevent hover effect */}
  <div
    className="overlay"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none", // Ensure events pass through overlay
    }}
  ></div>
</div>

  );
}
