import {Form,Button,Container} from 'react-bootstrap';
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";
import React, { useState,useEffect } from 'react';
import './App.css';

  

function Admin(){

  const  [email, setEmail] =useState('');
  const  [password, setPassword] =useState('');
  const navigate = useNavigate();
  function handelDemo2(e)
  {
      setPassword(e.target.value);
      console.log(password);
  }
  function handelDemo3(e)
  {
      setEmail(e.target.value);
      console.log(email);
  }


async function Show1()
{
 
    const data2 ={"username":email,"password":password};
    
    const config = {
        method :'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
     },
        body: JSON.stringify(data2)
     }
  
const response = await fetch ('http://localhost:4200/userlog',config)

const data3 = await response.json();
console.log(data3)
if(data3 =="success"){
 
 sessionStorage.setItem("data", JSON.stringify(data3));

 console.log(data3)
    navigate("/Dasboard")
}else{
 console.log("not");
 Swal.fire({
   icon: 'warning',
   // title: 'Password Changed',
   text: "wrong email or password",
})
}

  
    }


return(
    <>
         <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
  <link href="css/ruang-admin.min.css" rel="stylesheet"></link>
  
 <div   class="">
    
 
  <div class="container-login ">
  
  <div class="row justify-content-center " >
    <div class="col-xl-6 col-lg-12 col-md-9" style={{marginTop:"150px"}}>
      <div class="card shadow-sm my-5" >
      
        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-12">
              <div class="login-form">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Login</h1>
                </div>
                <form class="user">
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                      placeholder="Enter Email Address" onChange={handelDemo3} />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password"  onChange={handelDemo2}/>
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox small" style={{line_height: "1.5rem"}}>
                      <input type="checkbox" class="custom-control-input" id="customCheck"/>
                      <label class="custom-control-label" for="customCheck">Remember
                        Me</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <a  class="btn btn-primary btn-block" onClick={Show1}>Login</a>
                  </div>
                  
                  
                  
                </form>
                
                
                <div class="text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</div> 
</>
       
   );

}
export default Admin;