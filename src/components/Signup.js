import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css'
import {  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup(){
  let [userdata,setuserdata]=useState({})
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passregex = /^\d{6,10}$/;
  const nameregex = /^[a-zA-Z][a-zA-Z0-9#^&-_]{2,9}$/;
  let [pass,setpass]=useState(true)
  let [namex,setnamex]=useState(true)
  let [emai,setemai]=useState(true)
let f=useNavigate()

// for display image
const [image, setImage] = useState(null);
const [imagePreviewUrl, setImagePreviewUrl] = useState('');

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create a preview URL for the uploaded file
    const previewUrl = URL.createObjectURL(file);
    setImage(file);
    setImagePreviewUrl(previewUrl);
  }
};

const handleRemoveImage = () => {
  setImage(null);
  setImagePreviewUrl('');
};

// end of image display
  let logdetails=(event)=>{
    event.preventDefault();
axios.post('http://localhost:4000/users',userdata)
.then(response =>  console.log(response.data))
    console.log(userdata)  
  f('/login')
  }
  
  
  let validemail=(e)=>{
    if(emailRegex.test(e.target.value))
     {setuserdata({...userdata,[e.target.name]:e.target.value})
    setemai(true)
   }
   else {setemai(false)}
   }

    let validname=(e)=>{
      if(nameregex.test(e.target.value))
        {setuserdata({...userdata,[e.target.name]:e.target.value})
       setnamex(true)
      }
      else {setnamex(false)}  }

      let validpass=(e)=>{
        if(passregex.test(e.target.value))
          {setuserdata({...userdata,[e.target.name]:parseInt(e.target.value)})
         setpass(true)
        }
        else { setpass(false)}   }

return(<>


{/* // form to sign up  */}

<div className='container mt-5'>
  
    <form onSubmit={logdetails} className='login text-center'>
  <div className="mb-3 ">
    <label  className="form-label text-dark" >Email address</label>
   <div className='d-flex justify-content-center'> 
    <input type="email" className="form-control" id="exampleInputEmail1"
     aria-describedby="emailHelp" name='email'  onChange={validemail} required/>
      {emai?"":<span id='invaild3' className="position-absolute  badge rounded-pill bg-danger">
        <i className="fa-solid fa-envelope"></i> invaild e-mail
  </span>}
      </div>
    <div id="emailHelp" className="form-text text-light"> only gmail allowed , We'll never share it with anyone else </div>
  </div>
{/* /// */}
  <div className="mb-2 ">
    <label  className="form-label text-dark" >Upload a Photo of your National-Id</label>
   <div className='d-flex justify-content-center'> 
   <div class="file-input-wrapper">
    <input type="file" className="form-control" id="fileInput" name='file' required   onChange={handleFileChange} />
    <span class="file-input-text">Choose file</span>
    {imagePreviewUrl && (
        <div className="image-preview-container mt-2">
          <img src={imagePreviewUrl} alt="Preview" className="image-preview" style={{height:"200px",width:"300px",}} />
          <button onClick={handleRemoveImage} className="remove-button">Remove</button>
        </div>
      )}
    </div>
      {/* {emai?"":<span id='invaild3' className="position-absolute  badge rounded-pill bg-danger">
        <i className="fa-solid fa-envelope"></i> invaild e-mail
  </span>} */}
      </div>
    <div id="emailHelp" className="form-text text-light">please, Give us a Clear photo </div>
  </div>
{/* /// */}
  <div className="mb-3"> <label  className="form-label text-dark mt-3" >User name</label>
  <div className='d-flex justify-content-center'> 
    <input type="text" className="form-control" id="exampleInputname1" name='username'
    onChange={validname} required /> 
         {namex?"":<span id='invaild4' className="position-absolute  badge rounded-pill bg-danger">
          <i className="fa-solid fa-user"></i> invaild name
  </span>}
    </div>
    <div id="emailHelp" className="form-text text-light">your name must start with characters like ahmed_taha or ahmed12 or ahmed</div>
     </div>
  <div className="mb-3">
    <label  className="form-label text-dark">Password</label>
    <div className='d-flex justify-content-center'>
       <input type="password" className="form-control" id="exampleInputPassword1" 
    name='password' onChange={validpass} required/> 
    {pass?"":<span id='invaild5' className="position-absolute  badge rounded-pill bg-danger">
      <i className="fa-solid fa-lock"></i> invaild password
  </span>}
     </div>
     <div id="emailHelp" className="form-text text-light">enter only 6 to 10 numbers , not character allowed</div>
  </div>
  <button type="submit" className="btn btn-dark text-light" id="x">Sign up</button>
</form>
</div>
   
 
</>


)

}

export default Signup