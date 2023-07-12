import './Dyv.css';

import { useNavigate, useLocation } from "react-router-dom";
import {Form,Button,Navbar,nav,Container,Carousel,Table,Card,Row,Col} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from "axios";



import {BrowserRouter,Link,Routes,Route,MemoryRouter, NavLink} from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';

function Product() {
    const  [password, setPassword] =useState('');
    const  [email, setEmail] =useState('');
   
    const  [cpassword, setCpassword] =useState('');
    const navigate = useNavigate();
    const location = useLocation();
    function handelDemo2(e)
    {
        setPassword(e.target.value);
    }
    function handelDemo3(e)
    {
      setCpassword(e.target.value);
        console.log("cpassword");
    }
  
    useEffect(
      function () {
        const userEmail = location.pathname.split("/")[2];
        setEmail(userEmail);
      },
      [location.pathname]
        
   
    );
    console.log(email)
    async function Show1()
    {
     // const userEmail = location.pathname.split("/")[2];
      //setEmail(userEmail);

      var pw = document.getElementById("pswd").value; 
       var pn = document.getElementById("password").value;  
       console.log(pw)
       console.log(pn)
      //check empty password field  
      if(pw !== pn) {  
         alert("not match paswd") 
         return false; 
      }else{ 
        const data2 ={"email":email,"password":password};
        
        const config = {
            method :'POST',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
         },
            body: JSON.stringify(data2)
         }
      
//    const response = await fetch ('http://localhost:3306/uppassdate',config)
  const response = await fetch ('http://54.150.175.15:3306/uppassdate',config) 
    const data3 = await response.json();
    console.log(data3)
   if(data3.status==="success"){
     
    // sessionStorage.setItem("data", JSON.stringify(data3));
   
     
     console.log(data3)
   }else{
     console.log("not");

 }
   
      
        }
  

    //     async function mysubmit()
    //     {
    //         const data ={"username":username,"password":password};
    //         const config = {
    //             method :'POST',
    //             headers:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json',
    //          },
    //             body: JSON.stringify(data)
    //          }
    //          console.log(data);
    //     const response = await fetch ('https://api.shieldradr.com:3001/login',config)
    //     const json = await response.json();
    //       console.log(json);
    //       if(json.length === 0){
    //        console.log("invalid useer try again");
    //    }
    //    else if (json [0].type =="admin"){
    //        console.log("welcome admin");
    //        navigate("/Admin");
    //    }
    //  }



      }
  






  return (
    <div>
      
 <div class="wrapper fadeInDown">
  <div id="formContent">
  
    <h2 class="active"> create your new password here </h2>
  

   
   

    <form>
      <input type="text" id="pswd" class="fadeIn second" name="login" placeholder="new password" onChange={handelDemo3}/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="confirm password" onChange={handelDemo2} />
      <input type="button" class="fadeIn fourth" value="Done" onClick={Show1}/>
    </form>


   

  </div>
</div>

    </div>
    
  );
}

export default  Product;


  