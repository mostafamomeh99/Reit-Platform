import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import  {Link, useNavigate}  from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Login(props){
let [userdata,setuserdata]=useState({})
let [data,setdata]=useState([])
let [pass,setwrongpass]=useState(true)
let [emailinput,setwrongemail]=useState(true)
useEffect(
  ()=>{
    axios.get('http://localhost:4000/users')
.then((r)=>{setdata(r.data)})
  }
  ,[])
  let c=useNavigate()

let logdetails=(event)=>{
  event.preventDefault();
  console.log(data)
  console.log(userdata)
  const valuesArray = Object.values(userdata);
  console.log(valuesArray)
  if (valuesArray.length===2)
{let u=data.some((el)=>{
return el.password===parseFloat(userdata.password) }
)
let j=data.some((el)=>{
  return el.email===userdata.email }
  )
let z=data.filter((el)=>{
  return el.password===parseFloat(userdata.password)&&el.email===userdata.email?el:"" }
  )
if (u===true&&j===true)
  {setwrongpass(true)
    setwrongemail(true) 
    props.log(u,z[0].username)
    c('/')}
    if(u===false&&j===true)
    {setwrongpass(false)
      setwrongemail(true) 
    }
    if(j===false&&u===true)
      {setwrongemail(false)
        setwrongpass(true)
      }
    if(j===false&&u===false)
      {setwrongemail(false)
        setwrongpass(false)
      } }

}


let inputs=(e)=>{
  
  setuserdata({...userdata,[e.target.name]:e.target.value})

}


return(<>
<div className='container mt-5'>
    <form onSubmit={logdetails} className='login text-center'>
  <div className="mb-3 ">
    <label  className="form-label text-dark" >Email address</label>
   <div className='d-flex justify-content-center position-relative'> 
    <input type="email" className="form-control" id="exampleInputEmail1"
     aria-describedby="emailHelp" name='email' onChange={inputs} required /> 
      {emailinput?"":<><span id='invaild1' className="position-absolute   badge rounded-pill bg-danger">
       <i className="fa-solid fa-envelope"></i> invaild e-mail
  </span></>}
     </div>
    <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label text-dark">Password</label>
    <div className='d-flex justify-content-center position-relative '>
       <input type="password" className="form-control" id="exampleInputPassword1" 
    name='password'onChange={inputs} required/> 
    {pass?"":<span id='invaild2' className="position-absolute  badge rounded-pill bg-danger">
      <i className="fa-solid fa-lock"></i> invaild password
  </span>}
     </div>
  </div>
  <button type="submit" className="btn btn-dark text-light" id="x">Login
  
  </button>
  
</form>
<h3 className='text-center text-light' id='parsignup'>forget password ?</h3>
<h3 className='text-center mt-5' id='parsignup'>don't have account ?</h3>
<div className='d-flex justify-content-center '> 
<Link to='/signup'> <button className="btn btn-warning text-dark" id="signup">Sign up
   </button>  </Link></div>
</div>

</>
)

}

export default Login