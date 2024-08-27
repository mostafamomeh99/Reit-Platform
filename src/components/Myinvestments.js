import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import axios from 'axios';
import Apartmentcard from './Apartmentcard';
import { useEffect, useState } from 'react';
import { useContext } from "react";
import {counerx} from './State'
import { Link } from 'react-router-dom';
function Myinvestments(props){
    let {id}=useContext(counerx)
    let [invests,setinvests]=useState([])
    // let [data,setdata]=useState([])
    console.log(id)
    useEffect(
    ()=>{
        axios.get('http://localhost:5000/apartments')
    .then((res)=>{
        if(id.length!==0)
       { let u = res.data.filter((el)=>{
            return id.includes(el.id.toString())? el:"";
        })
        if(u.length!==0)
            {setinvests(u)} }
        // return ()=>{setinvests([])}
        else {setinvests([])}
     }) }
    ,[id])

    
   

    return(
<>
<div className='container-fluid'>
    
        <Link to='/home'><button className='btn btn-danger mt-3'>Back Apartments <i className="fa-solid fa-plane fa-rotate-180"></i> </button></Link>
<Link to='/company'><button className='btn btn-danger mt-3 ms-2'>Back Compounds <i className="fa-solid fa-plane fa-rotate-180"></i> </button></Link>
        <div className='d-flex '>
 <div className="card bg-dark mt-2 " style={{width:"400px",height:"172px"}} >
  <div className="card-body">
    <h5 className="card-title text-light">Current Money <i className="fa-solid fa-money-bill me-2"></i> : 20.000$e</h5>
    <h5 className="card-title text-light">Total Investments   <i className="fa-solid fa-sack-dollar me-2"></i> : 0$e </h5>
    <h5 className="card-title text-light">Current Gainings <i className="fa-solid fa-money-bill-trend-up me-2"></i> : 0$e </h5>
    <p className='card-text'><button className='btn btn-warning'>Deposite</button>
   <button className='btn btn-warning ms-2'>withdrawal</button></p>
  </div>
</div>
</div>
</div>
    {/* ////////////////*/}

{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div> */}

        {/* ////////////////*/}
    <div className='container'>
   {invests.length===0?<h1 className='text-center text-light mt-5'>"There is no investments for you "</h1>  :
    (<div className='row row-cols-1 mt-3'>
{invests.map((el)=>{
    return (  
<div className='col mb-5' key={el.id}>  
      <Apartmentcard apartment={el} addinvest={props.add} myinvest={props.invest} details={false}/>
          </div>
           )
})}
</div>) }
</div>
    </>

)
}

export default Myinvestments