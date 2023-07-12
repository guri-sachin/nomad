import {Form,Button,Container} from 'react-bootstrap';
import React, { useState,useEffect,useRef } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes,useLocation} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";
import { PDFExport, savePDF } from  '@progress/kendo-react-pdf';



function Admin()


{
  const [products3,setProducts3] =useState([]);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [name,setName] =useState('');

  console.log(location.state)
  useEffect(() => {
    
    setName(location.state[0].orderno)
  
  
      var data = {"fullname":name}
      console.log(data)
      axios.post("http://18.180.111.179:3306/Addressad",data).then(
        res=>  setProducts(res.data))
       
    }, [products]);
    
console.log(products)

const pdfExportComponent = useRef(null);
const contentArea =useRef(null);


const handel= (event) =>{
    pdfExportComponent.current.save();
}

   return(
    

 <div  >



    <div id="ebazar-layout" class="theme-blue">
        
        {/* <!-- sidebar --> */}
        <div class="sidebar px-4 py-4 py-md-4 me-0">
            <div class="d-flex flex-column h-100">
                <a href="index.html" class="mb-0 brand-icon">
                    <span class="logo-icon">
                        <i class="bi bi-bag-check-fill fs-4"></i>
                    </span>
                    <span class="logo-text">Pepperfry</span>
                </a>
                {/* <!-- Menu: main ul --> */}
                <ul class="menu-list flex-grow-1 mt-3">
                    <li><a class="m-link active" href="/"><i class="icofont-home fs-5"></i> <span>Dashboard</span></a></li>
                    <li class="collapsed">
                        <a class="m-link" data-toggle="collapse" data-target="#menu-product" href="#">
                            <i class="icofont-truck-loaded fs-5"></i> <span>Products</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                            {/* <!-- Menu: Sub menu ul --> */}
                            <ul class="sub-menu collapse" id="menu-product">
                               
                            <li><a class="ms-link" href="Addproduct">Product Add</a></li>
                               <li><a class="ms-link" href="Listproduct">Product List</a></li>
                                <li><a class="ms-link" href="Deletedproduct">Deleted Product</a></li>
                               
                            </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link" data-toggle="collapse" data-target="#categories" href="#">
                            <i class="icofont-chart-flow fs-5"></i> <span>Categories</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                            {/* <!-- Menu: Sub menu ul --> */}
                            <ul class="sub-menu collapse" id="categories">
                            <li><a class="ms-link" href="Addcategore">Categories Add</a></li>
                             <li><a class="ms-link" href="Addsub">Add Sub Categories</a></li>
                             <li><a class="ms-link" href="Addattribute">Add Attribute</a></li>
                             <li><a class="ms-link" href="Listcategore">Categories List</a></li>
                             <li><a class="ms-link" href="Listsub">Sub Categories List</a></li>
                            </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link"  data-toggle="collapse" data-target="#Attributes" href="#">
                        <i class="icofont-notepad fs-5"></i> <span>Attributes</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul class="sub-menu collapse" id="Attributes">
                        <li><a class="ms-link" href="Addcolor">Add Color</a></li>
                            <li><a class="ms-link" href="Attributvalue">Attribute values</a></li>
                        </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link"   href="Orderlist">
                        <i class="icofont-notepad fs-5" href="Orderlist"></i> <span href="Orderlist">Orders</span></a>
                        {/* <!-- Menu: Sub menu ul --> */}
                       
                    </li> 
                   
                    <li class="collapsed">
                        <a class="m-link"   href="Custmerlist">
                        <i class="icofont-funky-man fs-5" href="Custmerlist"></i> <span href="Orderlist">Customers List</span></a>
                        {/* <!-- Menu: Sub menu ul --> */}
                       
                    </li>
                    
                    
                    
                    
                    
                    
                    
                </ul>
                {/* <!-- Menu: menu collepce btn --> */}
                <button type="button" class="btn btn-link sidebar-mini-btn text-light">
                    <span class="ms-2"><i class="icofont-bubble-right"></i></span>
                </button>
            </div>
        </div>    

        {/* <!-- main body area --> */}
        <div class="main px-lg-4 px-md-4"> 

            {/* <!-- Body: Header --> */}
            <div class="header">
                <nav class="navbar py-4">
                    <div class="container-xxl">
        
                        {/* <!-- header rightbar icon --> */}
                        <div class="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                            
                            
                            
                            {/* <div class="dropdown notifications">
                                <a class="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                    <i class="icofont-alarm fs-5"></i>
                                    <span class="pulse-ring"></span>
                                </a>
                                <div id="NotificationsDiv" class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3">
                                    <div class="card border-0 w380">
                                        <div class="card-header border-0 p-3">
                                            <h5 class="mb-0 font-weight-light d-flex justify-content-between">
                                                <span>Notifications</span>
                                                <span class="badge text-white">06</span>
                                            </h5>
                                        </div>
                                        <div class="tab-content card-body">
                                            <div class="tab-pane fade show active">
                                                <ul class="list-unstyled list mb-0">
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar1.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Chloe Walkerr</span> <small>2MIN</small></p>
                                                                <span class="">Added New Product 2021-07-15 <span class="badge bg-success">Add</span></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <div class="avatar rounded-circle no-thumbnail">AH</div>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Alan	Hill</span> <small>13MIN</small></p>
                                                                <span class="">Invoice generator </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar3.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Melanie	Oliver</span> <small>1HR</small></p>
                                                                <span class="">Orader  Return RT-00004</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar5.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Boris Hart</span> <small>13MIN</small></p>
                                                                <span class="">Product Order to Toyseller</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar6.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Alan	Lambert</span> <small>1HR</small></p>
                                                                <span class="">Leave Apply</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar7.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Zoe Wright</span> <small class="">1DAY</small></p>
                                                                <span class="">Product Stoke Entry Updated</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="card-footer text-center border-top-0" href="#"> View all notifications</a>
                                    </div>
                                </div>
                            </div> */}
                            <div class="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                                <div class="u-info me-2">
                                    <p class="mb-0 text-end line-height-sm "><span class="font-weight-bold">Guri</span></p>
                                    <small>Admin Profile</small>
                                </div>
                                <a class="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                                    <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/profile_av.svg" alt="profile"/>
                                </a>
                                <div class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                    <div class="card border-0 w280">
                                        <div class="card-body pb-0">
                                            <div class="d-flex py-1">
                                                <img class="avatar rounded-circle" src="assets/images/profile_av.svg" alt="profile"/>
                                                <div class="flex-fill ms-3">
                                                    <p class="mb-0"><span class="font-weight-bold">Guri</span></p>
                                                    <small class="">Guri@gmail.com</small>
                                                </div>
                                            </div>
                                            
                                            <div><hr class="dropdown-divider border-dark"/></div>
                                        </div>
                                        <div class="list-group m-2 ">
                                            <a href="admin-profile.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-ui-user fs-5 me-3"></i>Profile Page</a>
                                            <a href="order-invoices.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-file-text fs-5 me-3"></i>Order Invoices</a>
                                            <a href="ui-elements/auth-signin.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-logout fs-5 me-3"></i>Signout</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
        
                        {/* <!-- menu toggler --> */}
                        <button class="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                            <span class="fa fa-bars"></span>
                        </button>
        
                        {/* <!-- main menu Search--> */}
                        <div class="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                            <div class="input-group flex-nowrap input-group-lg">
                                <input type="search" class="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping"/>
                                <button type="button" class="input-group-text" id="addon-wrapping"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
        
                    </div>
                </nav>
            </div>

            {/* <!-- Body: Body --> */}
            <div class="body d-flex py-lg-3 py-md-2">
                <div class="container-xxl">
                    
                    <div class="row align-items-center">
                        <div class="border-0 mb-4">
                            <div class="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 class="fw-bold mb-0 py-3 pb-2">Invoices</h3>
                                <div class="col-auto py-2 w-sm-100">
                                    <ul class="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                                     
                                        <li class="nav-item"><a class="nav-link  active" data-bs-toggle="tab" href="#Invoice-Simple" role="tab">Simple invoice</a></li>
                                        <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Invoice-Email" role="tab">Email invoice</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-12">
                            <div class="tab-content">
                               
                                <PDFExport ref={pdfExportComponent}>
                                <div class="tab-pane fade show active" id="Invoice-Simple">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8 col-md-12">
                                            <div class="card p-xl-5 p-lg-4 p-0">
                                                <div class="card-body">
                                                    <div class="mb-3 pb-3 border-bottom">
                                                        Invoice
                                                        <strong>May 22, 2021</strong>
                                                        <span class="float-end"> <strong>transection id:</strong> #18414</span>
                                                    </div>

                                                    <div class="row mb-4">
                                                        <div class="col-sm-6">
                                                            <h6 class="mb-3">From:</h6>
                                                            <div><strong>Pepperfry Shop</strong></div>
                                                            <div>111  Berkeley Rd</div>
                                                            <div>STREET ON THE FOSSE, Poland</div>
                                                            <div>Email: Pepperfry@gmail.com</div>
                                                            <div>Phone: +44 888 666 3333</div>
                                                        </div>
                                                        
                                                        <div class="col-sm-6">
                                                        {products.map((item,index)=>{
                                                     return(
                                                           <div key={index}>
                                                                
                  
                                                            <h6 class="mb-3">To:</h6>
                                                            <div><strong>{item.fullname}</strong></div>
                                                            <div>{item.line}</div>
                                                            <div>{item.city}, {item.country}</div>
                                                            <div>Email: {item.email}</div>
                                                            <div>Phone: {item.phone}</div>
                                                            </div>

);
})}
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="table-responsive-sm">
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center">#</th>
                                                                    <th>Item</th>
                                                                  
                                                                    <th >Item Cost</th>
                                                                    <th>Products Item</th>
                                                                    <th class="text-end">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {location.state.map((item,index)=>{
                 return(
                    <tr key={index}>
                                                    
                                                  <td>  <td class="text-center">1</td></td>
                                                        <td>
                                                        {JSON.parse(item.name.split(",")).map((item,index)=>{
 return(
     <td key={index}>

     
          {(item.split(","))} 
       
      
</td>
 );
})}
                                                        </td>
                                                        
                                                    
                                                    
                                                 

                
                                                         
                                                                    <td class="text-end">      {JSON.parse(item.price.split(",")).map((item,index)=>{
              return(
                  <td key={index}>

                  
                      {(item.split(","))} 
                    
                   
       </td>
              );
          })}
                                                      </td>
                                                                    <td class="text-center">                   {JSON.parse(item.qty.split(",")).map((item,index)=>{
              return(
                  <td key={index}>

                  
                     {(item.split(","))} 
                    
                   
       </td>
              );
          })}</td>
                                                                    <td class="text-end">{item.total}</td>
                                                                    </tr>

);
})}                                          
                                                            </tbody>
                                                        </table>
                                                    </div>
                    
                                                    <div class="row">
                                                        <div class="col-lg-4 col-sm-5">
                                                        
                                                        </div>
                                                        
                                                        <div class="col-lg-4 col-sm-5 ms-auto">
                                                            <table class="table table-clear">
                                                                <tbody>
                                                                {location.state.map((item,index)=>{
                 return(
                    <tr key={index}>
                                                                  

  <tr>

                                                                        <td ><strong>Subtotal</strong></td>
                                                                             {JSON.parse(item.price.split(",")).map((item,index)=>{
              return(
                  <td key={index}>
                     {(item.split(","))} 
                 </td>
              );
          })}

              
              </tr>
                                                                                     <tr>
                                                                        <td ><strong>Tax(18%)</strong></td>
                                                                        <td class="text-end">$59.4</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td ><strong>Total</strong></td>
                                                                        <td class="text-end"><strong>{item.total}</strong></td>
                                                                    </tr>
                                                                    </tr>
                                                                    );
                                                                })}   
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                    
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h6>Terms &amp; Condition</h6>
                                                            <p class="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                                                        </div>
                                                      
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                </PDFExport>
                                <div class="text-center">
                                                          
                                                          <button type="button" class="btn btn-primary btn-lg my-1" onClick={handel}><i class="fa fa-paper-plane-o" onClick={handel}></i>Download</button>
                                                      </div>
                                <div class="tab-pane fade" id="Invoice-Email">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8 col-md-12">
                                            <div class="d-flex justify-content-center">
                                                <table class="card p-5">
                                                    <tr>
                                                        <td></td>
                                                        <td class="text-center">
                                                            <table>
                                                                <tr>
                                                                    <td class="text-center">
                                                                        <h2>$389.00 Paid</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-center py-2">
                                                                        <h4 class="mb-0">Thanks for usingeBazar.</h4>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="pt-2 pb-4">
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    Attn: <strong>Dianalove</strong> Winston Salem FL 27107<br/>
                                                                                    Email: Dianalove@gmail.com<br/>
                                                                                    Phone: +88 123 456 789<br/>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="pt-2">
                                                                                    <table class="table table-bordered">
                                                                                        <tr>
                                                                                            <td class="text-start">Rado Watch</td>
                                                                                            <td class="text-end">$ 330.00</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="text-start">1 Year Product Warranty</td>
                                                                                            <td class="text-end">$ 10.99</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="text-start">Production Transportation</td>
                                                                                            <td class="text-end">$ 49.00</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="text-start w-80"><strong>Total</strong></td>
                                                                                            <td class="text-end fw-bold">$389.00</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="pt-2 pb-2 text-center">
                                                                        <a href="#">View in browser</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="p-0 text-center">
                                                                        PXL Inc. 47 Aurora St. South West, CT 06074
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="mt-3 text-center w-100">
                                                                <tr>
                                                                    <td class="aligncenter content-block">Questions? Email <a href="mailto:">info@pixelwibes.com</a></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>

                    </div> 
                </div>
            </div>
        
            {/* <!-- Modal Custom Settings--> */}
            

        

        </div>      

    </div>





</div>    
       
   );

}
export default Admin;