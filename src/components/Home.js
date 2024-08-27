import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import axios from 'axios';
import Apartmentcard from './Apartmentcard';

import { useEffect, useState } from 'react';

function Home(props){
  
  
let [data,setdata]=useState([])
useEffect(
()=>{
    axios.get('http://localhost:5000/apartments')
.then((res)=>{setdata(res.data)})
}
,[])
    
return(<>


    <div className='container mt-5'>
    <div className='text-center' id='most'>Owners Union Buildings</div>
    <div className='row row-cols-lg-3 mt-4'>
{data.map((el)=>{
    return (  
<div className='col mb-5' key={el.id}>  
       <Apartmentcard apartment={el} addinvest={props.add} myinvest={props.invest} details={true}/>
          </div>
           )
})}
</div>
</div>





    </>
)
}

export default Home

