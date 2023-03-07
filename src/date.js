import React from 'react'

const Date1 = ({handler}) => {
    let arr=[];
    const current = new Date();
    let today=current.getDate()
    for(let i=1;i<=31;i++){

      arr.push(<option key={i} value={i}>{i}</option>);
   
    }
  return (
      <select defaultValue={today}
       name="day" onChange={handler} >
        {arr}</select>
  )
 
}

export default Date1