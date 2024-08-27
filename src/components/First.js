import React from 'react'
import imgcompany from '../imgs/first1.PNG'
import imgapart from '../imgs/first2.PNG'
import imgafarm from '../imgs/first3.PNG'
import carhome1 from '../imgs/Capture2.PNG'
import carhome2 from '../imgs/Capture3.PNG'
import carhome3 from '../imgs/Capture4.PNG'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const First = () => {
  return (<>
    <div className='container mt-5 mb-5'>
<div className='row row-cols-1 row-cols-lg-3 row-cols-md-2'>
    <div className='col mt-2'>
    <div className="card" style={{width: "18rem",}}>
  <img src={imgcompany} className="card-img-top" alt="..." style={{height: "200px",}}/>
  <div className="card-body">
    <h5 className="card-title text-center fw-bold">مبانى الشركات</h5>
    <p className="card-text direction-rtl" id="first">مجموعة مبانى مختارة ومنفذة بواسطة شركات عقارات كبيرة على مستوى جمهورية مصر</p>
    <Link  className="text-center mt-1" to='/Company'><button className='btn btn-dark ' >Go 🚀🚀 </button></Link>
  </div>
</div>
    </div>
<div className='col mt-2'>
<div className="card" style={{width: "18rem",}}>
  <img src={imgapart} className="card-img-top" alt="..." style={{height: "200px",}}/>
  <div className="card-body">
    <h5 className="card-title text-center fw-bold">عمارات اتحاد سكان</h5>
    <p className="card-text direction-rtl" id="first">مجموعة مبانى وعمارات سكنية تم انشاءها وسط احياء مصر </p>
    <Link className="text-center mt-1" to='/home'><button className='btn btn-dark' >Go 🚀🚀 </button> </Link>
  </div>
</div>
</div>
<div className='col mt-2'>
<div className="card" style={{width: "18rem",}}>
  <img src={imgafarm} className="card-img-top" alt="..." style={{height: "200px",}}/>
  <div className="card-body">
    <h5 className="card-title text-center fw-bold">اراضى زراعية</h5>
    <p className="card-text direction-rtl" id="first">مجموعة اراضى زراعيه على مستوى صعيد مصر </p>
    <Link  className=" text-center mt-1"><button className='btn btn-dark'> SOON 🔥🔥
    </button></Link>
  </div>
</div>
</div>
</div>
    </div>
    <Container>
    <h1 className='text-center fw-50' id='compound222'>Here's What Traders Think About Us</h1>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carhome1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carhome2}
              alt="Second slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carhome3}
              alt="Third slide"
            />
        
          </Carousel.Item>
        </Carousel>
        </Container>
        </>
  )
}

export default First