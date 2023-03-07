import React from 'react'

const month = ({handler}) => {
    let montharr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let arr=[];
    const current = new Date();
    let today=current.getMonth()
    for(let i=0;i<12;i++){
    
      arr.push(<option key={i+1} value={i+1}>{montharr[i]}</option>);
     
    }
  return (
      <select defaultValue={today+1}
      name="month" onChange={handler} >{arr}</select>
  )
 
}

export default month
