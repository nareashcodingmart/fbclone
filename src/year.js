import React from 'react'

const year1 = ({handler}) => {
    let arr=[];
    const current = new Date();
    let today=current.getFullYear()

    for(let i=today;i>=1905;i--){
    
      arr.push(<option key={i} value={i}>{i}</option>);
      
    }
  return (
      <select defaultValue={today}
      name="year" onChange={handler} >
        {arr}</select>
  )
 
}

export default year1
