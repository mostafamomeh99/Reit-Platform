import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'

import { Link } from 'react-router-dom';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  function Footer(){
return(
    <MDBFooter className='bg-dark text-center text-white mt-5'>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn  outline color="light" floating className='m-1'  role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1'  role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1'  role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn outline color="light" floating className='m-1'  role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1'  role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1'  role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
        <MDBBtn outline color="light" floating className='m-1'  role='button'>
        <i className="fa-solid fa-phone"></i> 01014093362
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2020 Copyright : 
      <Link className='text-white ms-1' href='https://mdbootstrap.com/'>
         REIT Egypt.com
      </Link>
    </div>
  </MDBFooter>
  );
  }

  export default Footer