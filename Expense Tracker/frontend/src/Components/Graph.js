import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { chart_Data, getTotal } from "../Helper/helper";
import { default as api } from "../Store/apiSlice";

Chart.register(ArcElement);

const Graph = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  let graphData;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = (
      <div className="charts relative">
        <Doughnut {...chart_Data(data)} />
        <h3 className="font-bold title">Total</h3>
        <span className="block text-3xl text-emerald-400 title2">
          ${getTotal(data) ?? 0}
        </span>
      </div>
    );
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        {graphData}
        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Graph;
