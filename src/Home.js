import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link,Router,Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';

import Register from './My/Register';
import Reported from './My/Reported';
import Paid from './My/Paid';
import Room1 from './My/Room1';
import Room2 from './My/Room2';
import Room3 from './My/Room3';
import Login from './My/Login';
import Heart from './My/Heart';
import Sessions from './My/Sessions';
import Subcategore from './My/Subcategore';
import Subscribed from './My/Subscribed';
import Subscriptions from './My/Subscriptions';
import Add from './My/Add';
import Add1 from './My/Add1';
import Addsub from './My/Addsub';
import Addmessage from './My/Addmessage';
import Audio from './My/Audio';
import Categories from './My/Categories';
import Content from './My/Content';
import Corporate from './My/Corporate';
import Live from './My/Live';
import Message from './My/Message';
import Dasboard from './My/Dasboard';
import Corporate1 from './My/Corporate1';

import Livesessions from './My/Livesessions';
import Livesessions1 from './My/Livesessions1';
import Social from './My/Social';
import Ticket from './My/Ticket';
import Transaction from './My/Transaction';
import Video from './My/Video';  
import Participants from './My/Participants'; 
import Participants1 from './My/Participants1';
import Allocate from './My/Allocate';
import Add2 from './My/Add2';
import Add3 from './My/Add3';
import Add4 from './My/Add4';
import Add5 from './My/Add5';
import Enquiry from './My/Enquiry';
import Content1 from './My/Content1';
import Publish from './My/Publish';
import Invoices from './My/Invoices';
import Paidinvoice from './My/Paidinvoice';
import Add6 from './My/Add6';
import Corporateaccept from './My/Corporateaccept';
import Rejectcorporate from './My/Rejectcorporate';
import Invoicelist from './My/Invoicelist';
import Invoice from './My/Invoice';
import Details from './My/Details';
import Editsub from './My/Editsub'; 
import Editcate from './My/Editcate';  
import Editsubcate from './My/Editsubcate';  
import Editmessage from './My/Editmessage';  
import Dyv from './My/Dyv'; 

function Home()
{
   

   return(
    

 <div>
    
    

     <Routes>
     <Route exact path="/Register" element={<Register/>}></Route>
     <Route exact path="/Heart" element={<Heart/>}></Route>
     <Route exact path="/Reported" element={<Reported/>}></Route>
            <Route exact path="/Paid" element={<Paid/>}></Route>
            <Route exact path="/Room1" element={<Room1/>}></Route>
            <Route exact path="/Room2" element={<Room2/>}></Route>
            <Route exact path="/Room3" element={<Room3/>}></Route>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/Sessions" element={<Sessions/>}></Route>
            <Route exact path="/Subcategore" element={<Subcategore/>}></Route>
            <Route exact path="/Subscribed" element={<Subscribed/>}></Route>
            <Route exact path="/Subscriptions" element={<Subscriptions/>}></Route>
            <Route exact path="/Add" element={<Add/>}></Route> 
            <Route exact path="/Add1" element={<Add1/>}></Route>
            <Route exact path="/Addsub" element={<Addsub/>}></Route>
            <Route exact path="/Addmessage" element={<Addmessage/>}></Route>
            <Route exact path="/Audio" element={<Audio/>}></Route>   
            <Route exact path="/Categories" element={<Categories/>}></Route> 
            <Route exact path="/Content" element={<Content/>}></Route> 
            <Route exact path="/Corporate" element={<Corporate/>}></Route> 
            <Route exact path="/Live" element={<Live/>}></Route> 
            <Route exact path="/Message" element={<Message/>}></Route> 
            <Route exact path="/Dasboard" element={<Dasboard/>}></Route> 
            <Route exact path="/Corporate1" element={<Corporate1/>}></Route> 

            <Route exact path="/Livesessions" element={<Livesessions/>}></Route>
            <Route exact path="/Livesessions1" element={<Livesessions1/>}></Route>
            <Route exact path="/Social" element={<Social/>}></Route> 
            <Route exact path="/Ticket" element={<Ticket/>}></Route>  
            <Route exact path="/Transaction" element={<Transaction/>}></Route>
            <Route exact path="/Video" element={<Video/>}></Route> 
            <Route exact path="/Participants" element={<Participants/>}></Route> 
            <Route exact path="/Participants1" element={<Participants1/>}></Route>   
            <Route exact path="/Allocate" element={<Allocate/>}></Route>  
            <Route exact path="/Add2" element={<Add2/>}></Route>
            <Route exact path="/Add3" element={<Add3/>}></Route>
            <Route exact path="/Add4" element={<Add4/>}></Route>
            <Route exact path="/Add5" element={<Add5/>}></Route> 
            <Route exact path="/Enquiry" element={<Enquiry/>}></Route> 
            <Route exact path="/Content1" element={<Content1/>}></Route> 
            <Route exact path="/Publish" element={<Publish/>}></Route> 
            <Route exact path="/Invoices" element={<Invoices/>}></Route> 
            <Route exact path="/Paidinvoice" element={<Paidinvoice/>}></Route> 
            <Route exact path="/Add6" element={<Add6/>}></Route>  
            <Route exact path="/Corporateaccept" element={<Corporateaccept/>}></Route>     
            <Route exact path="/Rejectcorporate" element={<Rejectcorporate/>}></Route> 
            <Route exact path="/Invoicelist" element={<Invoicelist/>}></Route>  
            <Route exact path="/Invoice" element={<Invoice/>}></Route>  
            <Route exact path="/Details" element={<Details/>}></Route>
            <Route exact path="/Editsub" element={<Editsub/>}></Route> 
            <Route exact path="/Editcate" element={<Editcate/>}></Route> 
           <Route exact path="/Editsubcate" element={<Editsubcate/>}></Route>  
           <Route exact path="/Dyv/:email" element={<Dyv />}></Route>
             <Route exact path="/Editmessage" element={<Editmessage/>}></Route>  
</Routes> 

 </div>

  
       
   );

}
export default Home;