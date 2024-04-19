import React from "react";
import { default as api } from "../Store/apiSlice";
import {getLabels} from "../Helper/helper"
import Spinner from "./Spinner";

const Labels = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  
  let transaction;
 
  

  if (isFetching) 
  {
    transaction = <Spinner/>;
  } 
  else if (isSuccess) 
  {
    
  
    transaction = getLabels(data).map((v, i) => <LabelComponents key={i} data={v} />);
    
    
  } else if (isError) {
    transaction = <div>Error</div>;
  }



  return <>{transaction}</>;
};

const LabelComponents = ({ data }) => {
  if (!data) {
    <></>;
  }
  return (
    <div className="labels flex justify-between">
      <div
        className="w-2 h-2 rounded py-3 labels_div"
        style={{ background: data.color ?? "" }}
      ></div>
      <div className="flex gap-2">
        <h3>{data.type ?? ""}</h3>
      </div>

      <div className="font-bold">{Math.round(data.percent) ?? 0}%</div>
    </div>
  );
};

export default Labels;
