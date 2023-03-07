import "./app.css";
import Dated from "./date.js";
import Year from "./year.js";
import Month from "./month.js";
import { useEffect, useRef, useState } from "react";
import  axios  from "axios";
function App() {
  let firstnamedata = useRef(null);
  let day=new Date().getDate();
  let month=new Date().getMonth();
  month++;
  let year=new Date().getFullYear();
  useEffect(() => {
    firstnamedata.current.focus();
  }, [])
  let [data,setData]=useState({
    firstname:"",
    lastname:"",
    id:"",
    password:"",
    date:`${year}-${month}-${day}`,
    gender:""
  })

const handler=(e)=>{
  const newdata={...data};
  newdata[e.target.name]=e.target.value;
   setData(newdata);
  //  console.log(newdata);
}
const handlerdate=(e)=>{
  if(e.target.name==="day"){
    day=e.target.value;
  }
  else if(e.target.name==="month"){
    month=e.target.value;
  }
  else if(e.target.name==="year"){
    year=e.target.value;
  }
  let newdata={...data,date:`${year}-${month}-${day}`}
  setData(newdata);
}
const apicall=async()=>{
    //  console.log(data)
    let res=await axios.post('http://localhost:8000/signup',data);
    console.log(res.data.message)
}


  return (
    <div className="signup-outer">
      <div className="signup">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png" draggable="false" alt="" />
        <div className="signup-top">
          <div> Sign Up</div>
          <div> It's quick and easy.</div>
        </div>
        <div className="signup-bottom">
          <div className="signup-name">
            <input type="text" placeholder="First name" name="firstname"
              ref={firstnamedata} value={data.firstname} onChange={(e)=>handler(e)}/>

            <input type="text" placeholder="Surname"  name="lastname"
            value={data.lastname} onChange={(e)=>handler(e)}/>

          </div>
          <input className="inputbox" type="text" placeholder="Mobile number or email address" 
             name="id" value={data.id} onChange={(e)=>handler(e)}/>

          <input className="inputbox" type="password" placeholder="New password" 
           name="password" value={data.password} onChange={(e)=>handler(e)}/>
          <div className="signup-date">
            <span> Date of birth</span>
            <div className="date">
              <Dated handler={handlerdate}/>
              <Month handler={handlerdate}/>
              <Year handler={handlerdate}/>
            </div>

          </div>
          <div className="signup-gender">
            <span>Gender</span>
            <div>
              <span>
                <label>Female</label>
                <input type="radio" value="Female" name="gender" onChange={(e)=>handler(e)} />
              </span>
              <span>
                <label>male</label>
                <input type="radio" value="male" name="gender" onChange={(e)=>handler(e)}/>
              </span>
              <span>
                <label>Custom</label>
                <input type="radio" value="Custom" name="gender" onChange={(e)=>handler(e)}/>
              </span>
            </div>
          </div>


          <div className="custom" id="custom">
            <select defaultValue={0}>
              <option  value={0} disabled={1}>Select your pronoun</option>
              <option value='She: "Wish her a happy birthday!"'>She: "Wish her a happy birthday!"</option>
              <option value='He: "Wish him a happy birthday!"'> He: "Wish him a happy birthday!"</option>
              <option value='They: "Wish them a happy birthday!"'>They: "Wish them a happy birthday!"</option>
            </select>

            <span>Your pronoun is visible to everyone.</span>
            <input type="text" placeholder="Gender (optional)" />

          </div>


          <div className="signup-para">People who use our service may have uploaded your contact information to Facebook.<a href="">Learn more</a></div>
          <div className="signup-para">By clicking sign Up. you agree to our <a href="">Terms, Privacy Policy</a> and <a href="">Cookies Policy. </a>
            You may receive SMS notifications from us and can opt out at any time.</div>
          <div className="signup-button"><button onClick={()=>apicall()}>Sign Up</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
