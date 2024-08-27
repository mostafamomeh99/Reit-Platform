import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import First from './components/First';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbarx from './components/Navbarx';
import Rules from './components/Rules';
import Company from './components/Company';
import Home from './components/Home';
import Navbarv from './components/Navbarv';
import Abouthome from './components/Abouthome';
import { Route,Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Apartmentdetails from './components/Apartmentdetails';
import Myinvestments from './components/Myinvestments';
import Footer from './components/Footer';
function App() {
  let c=useNavigate()
  let [i,seti]=useState(false)
  let [k,setk]=useState("User")
  let [idx,setidx]=useState([])
  let [count,setcount]=useState(0)
let ifunc =(d,x)=>{
seti(d)
setk(x)

}
let idofmyinvest=(id)=>{
  setidx([...idx,id])
  let u=idx.find(el=>{return el===id?el:""})
  if(!u)
{setcount(count+1)}
  
}
let logoutfunc=(y)=>{
  seti(y)
  c('/login')
}
  if (!i)
  {return (
   <>

 <Navbarx />  
<Routes>

<Route  path="/" element={<>  <First/> <Footer/> </>  }/>
<Route  path="/home" element={<>   <Home add={i} invest={idofmyinvest}/> <Footer/> </>}/>
<Route  path="/company" element={<> <Company/> <Footer/> </>}/>
<Route  path="/about" element={<> <Abouthome/> <Footer/> </> }/>
<Route  path="/login" element={<> <Login log={ifunc}/> <Footer/> </>}/>
<Route  path="/apartments/:apartmentid" element={<> <Apartmentdetails/> <Footer/> </>}/>
<Route  path="/signup" element={<> <Signup/> <Footer/></>}/>
<Route  path="/rules" element={<Rules/>}/>

</Routes>


    </>
  );}

  else if (i)
    {return (
      <>
   <Navbarv user={k} logout={logoutfunc} /> 
  <Routes>
  <Route  path="/" element={ <> <First/>   <Footer/></>}/>
  <Route  path="/home" element={  <>  <Home add={i} invest={idofmyinvest}/>  <Footer/></>}/>
  <Route  path="/company" element={<> <Company/> <Footer/> </>}/>
  <Route  path="/apartments/:apartmentid" element={<> <Apartmentdetails add={i} invest={idofmyinvest}/> <Footer/> </>}/>
  <Route  path="/about" element={<> <Abouthome/> <Footer/> </>}/>
  <Route  path="/invests" element={<> <Myinvestments /> <Footer/> </>}/>
  <Route  path="/rules" element={<Rules/>}/>
  </Routes>
  
  </>
    );} 



}

export default App;
