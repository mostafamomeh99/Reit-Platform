import { Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import Car from "./Car";
import { useContext } from "react";
import {counerx} from './State'
function Apartmentcard(props){

let {counter,id,decounter}=useContext(counerx)

    return(
      <> 
      <div className={`${props.details?'card':'card-x'} bg-light`}>      

<Car img={props.apartment.image} p={props.apartment.id} j={props.details}/>

<div className={props.details?`card-body`:`card-body mt-3`}>
<h4 className="card-title text-center mb-3"> {props.apartment.title}</h4>
<p className={`card-text ${!props.details&&'ms-3'}`}>Location : <span>{props.apartment.location}</span></p>
{!props.details&&(<p className={`card-text ${!props.details&&'ms-3'}`}>description : <span>{props.apartment.discription}</span></p>)}
<p className={`card-text ${!props.details&&'ms-3'}`}>Total shares : <span>{props.apartment.totalshares}</span></p>
<p className={`card-text ${!props.details&&'ms-3'}`}>avaliable shares : <span>{props.apartment.avaliableshares}</span></p>
<p className={`card-text ${!props.details&&'ms-3'}`}>share price : <span>{props.apartment.shareprice}</span></p>
{!props.details&&<p className={`card-text ${!props.details&&'ms-3'}`}>
  <button className="btn btn-warning" >Premuim Details <i className="fa-solid fa-dollar-sign"></i></button></p>}
{props.details&&(<Link to={`/apartments/${props.apartment.id}`} className="btn btn-dark mt-2" id='linkdetail'>Go Details</Link>)}
{id.includes(props.apartment.id)?
  props.details&&(<p className='card-text ms-1 mt-2 mb-2' id='done'><i className="fas fa-archive"></i> added</p>):
(props.addinvest&&(<button className={`btn btn-dark mt-2 ${!props.details&&'ms-3 mb-3'}`} id='linkdetail' 
onClick={()=>{counter(props.apartment.id)
}}>Add to my investments</button>))}

{id.includes(props.apartment.id)&&!props.details?
(<>
<p className={`card-text ${!props.details&&'ms-3'}`}>
<button className="btn btn-danger mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">
  Confirm Investment <i className="fa-solid fa-dollar-sign"></i></button></p>
<button className='card-text ms-3 mt-2 mb-2 btn btn-dark' id='done' onClick={()=>{decounter(props.apartment.id)}}>
  <i className="fa-solid fa-trash-can"></i> remove from my investments</button></>):""}

{/* ///////////////////// */}
{/* // جرب ال bg-dark */}
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">VISA-CARD-Id:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Upload Contract Acknowledgment Image :</label>
            <input type="file" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Important Message:</label>
            <div class="fw-bold" id="message-text">Your Money will be in this apartment , you will not able to sell without agree from others </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger">Confirm</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>    
                    </> 
                )
                                    
  
}

export default Apartmentcard