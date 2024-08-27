import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import mainphoto from '../imgs/Capture8.jpg'
import carx1 from '../imgs/Capture10.PNG'
import carx2 from '../imgs/Capture11.PNG'
import carx3 from '../imgs/Capture12.PNG'
import carx4 from '../imgs/Capture13.PNG'
import carx5 from '../imgs/Capture14.PNG'
import carx6 from '../imgs/Capture15.PNG'
import carx7 from '../imgs/Capture16.PNG'
import carx8 from '../imgs/Capture17.PNG'
import  carx9 from '../imgs/Capture18.PNG'
import carx10 from '../imgs/Capture19.PNG'
import carx11 from '../imgs/Capture20.PNG'
import carx12 from '../imgs/Capture21.PNG'
import carx13 from '../imgs/Capture22.PNG'
import carx14 from '../imgs/Capture23.PNG'
import carx15 from '../imgs/Capture24.PNG'
import carx16 from '../imgs/Capture25.PNG'
import carx17 from '../imgs/Capture26.PNG'
import carx18 from '../imgs/Capture27.PNG'
import carxx1 from '../imgs/Capture28.PNG'
import carxx2 from '../imgs/Capture29.PNG'
import carxx3 from '../imgs/Capture30.PNG'
import carxx4 from '../imgs/Capture31.PNG'
import carxx5 from '../imgs/Capture32.PNG'
import carxx6 from '../imgs/Capture33.PNG'
import carxx7 from '../imgs/Capture34.PNG'
import carxx8 from '../imgs/Capture35.PNG'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Scrollbar, Pagination , A11y , Navigation  } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Company(props){
 
    
return(<>

<div id='x3000' className='position-relative'>  
<img src={mainphoto} alt="" id="mainphoto"/>
<button className="btn btn-primary " id="maindialg" > NorthCoast now available !!</button>
</div>
<br/>

<div className='container  mt-5'>
<div className='text-left mt-5' id='compound222'>Top Compounds </div>
<div className=' mt-3'>
 <Swiper
   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={12}
      slidesPerView={6}
      // scrollbar={{ draggable: true }}
      // pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx10} className='carxx1'/> </Card> </SwiperSlide>
      <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx9} className='carxx1'/>
    </Card> </SwiperSlide>
      <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx8} className='carxx1'/>
    </Card> </SwiperSlide>
      <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx7} className='carxx1'/>
    </Card></SwiperSlide>
      <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx6} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx5} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx4} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx3} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx2} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx1} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx11} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx12} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx13} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx14} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx15} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx16} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx17} className='carxx1'/>
    </Card></SwiperSlide>
    <SwiperSlide><Card style={{ width: '11rem' }} className='cardf'>
      <Card.Img variant="top" src={carx18} className='carxx1'/>
    </Card></SwiperSlide>
    
    <div className="swiper-button-prev-custom ">
    <i className="fa-solid fa-caret-left fa-3x"></i>
      <div className='prev '> </div> 
      </div>
      
      <div className="swiper-button-next-custom ">
      <i className="fa-solid fa-caret-right fa-3x"></i>
      <div className='next'>  </div>
      </div>
    </Swiper>
    
    

    </div>
    </div>


<Container>
<div className='text-left mt-5' id='compound222'>Top areas </div>
<Row>
        <Col xs={6} md={4} sm={6} lg={3} className='mt-2'> <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={carxx1} className='mango2'/>
      <Card.Body>
        <Card.Title className='text-center'>New cairo</Card.Title>
        <Card.Text className='text-center'>
          177 compounds available!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col >
        <Col xs={6} md={4} sm={6} lg={3} className='mt-2'><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={carxx2} className='mango2'/>
      <Card.Body>
        <Card.Title className='text-center'>6th of October</Card.Title>
        <Card.Text className='text-center'>
        160 compounds available!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col xs={6} md={4} sm={6} lg={3} className='mt-2'><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={carxx3} className='mango2'/>
      <Card.Body>
        <Card.Title className='text-center'>New capital city</Card.Title>
        <Card.Text className='text-center'>
        160 compounds available!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col xs={6} md={4} sm={6} lg={3} className='mt-2'><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={carxx4} className='mango2'/>
      <Card.Body>
        <Card.Title className='text-center'>Mostakbal city</Card.Title>
        <Card.Text className='text-center'>
        140 compounds available!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      {/* </Row>
      <Row className='mt-3'> */}
      <Col xs={6} md={4} sm={6} lg={3} className='mt-2'><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={carxx5} className='mango2'/>
      <Card.Body>
        <Card.Title className='text-center'>Ain sokhna</Card.Title>
        <Card.Text className='text-center'>
        180 compounds available!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4} sm={6} lg={3} className='mt-2'><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={carxx6} className='mango2'/>
      <Card.Body>
        <Card.Title className='text-center'>North coast</Card.Title>
        <Card.Text className='text-center'>
        160 compounds available!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4} sm={6} lg={3} className='mt-2'><Card style={{ width: '15rem' }} className='position-relative'>
      <Card.Img variant="top" src={carxx7} className='mango2'/>
      <Card.Body>
        <Card.Title className='text-center'>El gouna</Card.Title>
        <Card.Text className='text-center'>
        150 compounds available!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4} sm={6} lg={3} className='mt-2'><Card style={{ width: '15rem' }} className='position-relative'>
      <Card.Img variant="top" src={carxx8} className='mango2'/>
      <Card.Body>
        <Card.Title className='text-center'>New Heliopolis</Card.Title>
        <Card.Text className='text-center'>
        110 compounds available!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      </Row>
</Container>

<br/>
<br/>





    </>
)
}

export default Company

