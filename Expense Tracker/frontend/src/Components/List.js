import React from "react";
import 'boxicons'
import { default as api } from "../Store/apiSlice";

const List = () => {

  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  
  let transaction;
  
  

  const handleClick = (e) => {
    const recordId = e.target.dataset.id;
    console.log("Transaction ID:", e.target.dataset.id);
    try {
      deleteTransaction(recordId);
      console.log("Transaction deletion initiated");
    } catch (error) {
      console.error("Error initiating transaction deletion:", error);
      // Handle the error as needed
    }
  };
  

  if (isFetching) 
  {
    transaction = <div>Fetching</div>;
  } 
  else if (isSuccess) 
  {
    transaction = data.map((v, i) => <Transaction key={i} category={v} handler={handleClick} />);
  } 
  else if (isError) 
  {
    transaction = <div>Error</div>;
  }

  


  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-md font-bold text-xl">History</h1>
      {transaction}
    </div>
  );
};

const Transaction = ({ category , handler }) => {
  if (!category) {
    return null;
  }
  return (
    <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color ?? 'red'}`}}>
        <button className="px-3" onClick={handler}><box-icon data-id={category._id} name='trash' size='15px' color={category.color}></box-icon></button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
};

export default List;
