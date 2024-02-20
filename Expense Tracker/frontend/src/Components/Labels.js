import React from 'react'


const LabelObj=[
    {

        type:"Savings",
        color:"#f9c74f",
        percent:45

    },
    {

        type:"Investment",
        color:"#f9c74f",
        percent:20

    },

    {

        type:"Expense",
        color:"rgb(54, 162, 235)",
        percent:10

    },
]
const Labels = () => {
  return (
    <>
      {LabelObj.map((v,i)=> <LabelComponents key={i} data={v} />)}
    </>
  )
}

const LabelComponents = ({data})=>{
    if(!data)
    {
        <></>
    }
    return(
        <div className='labels flex justify-between'>

            <div className='w-2 h-2 rounded py-3 labels_div' style={{background:data.color??""}}></div>
            <div className='flex gap-2'>
                <h3>{data.type??""}</h3>
            </div>

            <div className='font-bold'>{data.percent??0}%</div>
        </div>
    )
}

export default Labels
