import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'

function Car(props){
   let y= props.p
return(<>
<div id={`carouselExampleControls${y}`} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
{props.img.map((el,i)=>{
    return(<div className={`carousel-item ${i===0?`active`:""}`} key={el}>
        <img src={el} className="d-block w-100" alt="..." id={props.j?`imgcar${i+1}`:`imgcar-x${i+1}`}/>
      </div>)
})}

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${y}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${y}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
</>
)
}

export default Car