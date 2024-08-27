import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import axios from 'axios';
import Apartmentcard from './Apartmentcard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Apartmentdetails (props){
let r=useParams()
    let [data,setdata]=useState([])
useEffect(
()=>{
    axios.get(`http://localhost:5000/apartments/${r.apartmentid}`)
.then((res)=>{setdata([res.data])})
}
,[r.apartmentid])
console.log(data)
return(<>
    <div className='container'>
    <div className='row row-cols-1 mt-3'>
{data.map((el)=>{
    return (  
<div className='col mb-5' key={el.id}> 
    <Apartmentcard apartment={el} addinvest={props.add} myinvest={props.invest} details={false}/>  </div>
           )
})}
</div>
</div>
    </>
)
}

export default Apartmentdetails