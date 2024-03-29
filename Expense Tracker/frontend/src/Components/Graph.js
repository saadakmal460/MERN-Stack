import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";

Chart.register(ArcElement);
const Graph = () => {
    const Config = {
        data: {
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
              borderRadius: 30,
              spacing:10
            },
          ],
        },
        options: {
          cutout: 115,
          
        },
      };
      

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="charts relative">
          <Doughnut {...Config}/>
          <h3 className="font-bold title">Total</h3>
          <span className="block text-3xl text-emerald-400 title2">${0}</span>
        </div>

        <div className="flex flex-col py-10 gap-4">
          <Labels/>

        </div>
      </div>
    </div>
  );
};

export default Graph;
