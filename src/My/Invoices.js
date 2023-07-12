import {Form,Button,Container} from 'react-bootstrap';
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes,useLocation} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";
import React, { useState,useEffect,useRef } from 'react';
import './App.css';
import { PDFExport, savePDF } from  '@progress/kendo-react-pdf';


function Admin(){

  const location = useLocation();
  const pdfExportComponent = useRef(null);
  const contentArea =useRef(null);
  const [products, setProducts] = useState([]);
  
  const handel= (event) =>{
      pdfExportComponent.current.save();
  }

  var kl = Number(location.state[0].price) + 59
  console.log(kl)
return(
 <div  >
   <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
  <link href="css/ruang-admin.min.css" rel="stylesheet"></link>
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="js/ruang-admin.min.js"></script>
  <div id="wrapper">

    
    <ul class="navbar-nav sidebar sidebar-light accordion " id="accordionSidebar">
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon">
          <img src="img/logo/logo2.png"/>
        </div>
        <div class="sidebar-brand-text mx-3">Nomad Admin</div>
      </a>
      <hr class="sidebar-divider my-0"/>
      <li class="nav-item active">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>
      <hr class="sidebar-divider"/>
         
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
          aria-expanded="true" aria-controls="collapseBootstrap">
          <i class="far fa-fw fa-user"></i>
          <span>Users</span>
        </a>
        <div id="collapseBootstrap" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Users</h6>
            <a class="collapse-item" href="Register">Registered Users</a>
            <a class="collapse-item" href="Paid">Paid Users</a>
            <a class="collapse-item" href="Subscribed">Subscribed Users</a>
            <a class="collapse-item" href="Reported">Reported Users</a>
          
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Subscriptions">
          <i class="fas fa-fw fa-user-plus"></i>
          <span>Subscriptions</span>
        </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="Categories">
          <i class="fa fa-list-alt"></i>
          <span>Categories</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Subcategorie">
          <i class="fa fa-list-alt"></i>
          <span>Sub Categories</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Content1">
          <i class="fa fa-file"></i>
          <span>Manage Content</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Content">
          <i class="fa fa-newspaper"></i>
          <span>Analyse Content Trend</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Message">
          <i class="fa fa-envelope"></i>
          <span>Inspirational Message</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Social">
          <img src="img/social.jpg"/>
          <span>Social Media Groups</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Video">
         <i class="fa fa-play-circle" ></i>
          <span>Dance Videos</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Live">
         <i class="fa fa-stream" ></i>
          <span>Live Sessions</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap1"
          aria-expanded="true" aria-controls="collapseBootstrap1">
          <i class="fa fa-building"></i>
          <span>Corporate Users</span>
        </a>
        <div id="collapseBootstrap1" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">

                                <a class="collapse-item" href="Corporate1">Corporate Users</a>
                                <a class="collapse-item" href="Corporateaccept">Accpted User</a>
                                <a class="collapse-item" href="Rejectcorporate">Rejected User</a>
                                <a class="collapse-item" href="Invoicelist">Invoice List</a>

                            </div>
                        </div>
      </li>
      
            <li class="nav-item">
        <a class="nav-link" href="Transaction">
         <i class="fa fa-credit-card" ></i>
          <span>Transaction History</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Ticket">
         <i class="fas fa-ticket-alt" ></i>
          <span>Ticket Raised</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Enquiry">
         <i class="fa fa-question-circle" ></i>
          <span>Inquiry Form</span>
        </a>
      </li>
      
      
      
      
      
      <hr class="sidebar-divider"/>
     
    </ul>
   
   
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">

        <nav class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
          <button id="sidebarToggleTop" class="btn btn-link rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" data-target="#colk"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"  id='colk'>
                <form class="navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-1 small" placeholder="What do you want to look for?"
                      aria-label="Search" aria-describedby="basic-addon2" style={{border_color: "#3f51b5;"}}/>
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
         
       
            <div class="topbar-divider d-none d-sm-block"></div>
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" data-target="#wetrg"
                aria-haspopup="true" aria-expanded="false">
                <img class="img-profile rounded-circle" src="img/boy.png" />
                <span class="ml-2 d-none d-lg-inline text-white small">Maman Ketoprak</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown" id='wetrg'>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
       
       
        <div class="container-fluid" id="container-wrapper">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800"></h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item">Corporate Users</li>   &nbsp; 
               <li class="breadcrumb-item">View Invoice</li>
             
            </ol>
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
                                                    <strong>Invoice</strong>   &nbsp; 
                                                        <strong>May 22, 2021</strong>
                                                        <span class="float-end"> <strong>transection id:</strong> #18414</span>
                                                    </div>

                                                    <div class="row mb-4">
                                                        <div class="col-sm-6">
                                                            <h6 class="mb-3">From:</h6>
                                                            <div><strong>Nomad</strong></div>
                                                            <div>111  Berkeley Rd</div>
                                                            <div>STREET ON THE FOSSE, Poland</div>
                                                            <div>Email:  Nomad@gmail.com</div>
                                                            <div>Phone: +44 888 666 3333</div>
                                                        </div>
                                                        
                                                        <div class="col-sm-6">
                                                     
                  
                                                            <h6 class="mb-3">To:</h6>
                                                            <div><strong></strong></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div>Email:  {location.state[0].email} </div>
                                                            <div>Phone: </div>
                   
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="table-responsive-sm">
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center">#</th>
                                                                    <th class="text-center">Member</th>
                                                                  
                                                            
                                                                    <th class="text-center">Price</th>
                                                                    <th class="text-end">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                              <tr>
                                                    
                                                  <td class="text-center">{location.state[0].id}</td>
                                                      
                                                        
                                                    
                                                    
                                                 

                
                                                         
                                                             
                                                                    <td class="text-center">    
                                                                    {location.state[0].member}             
  </td>
                                                                    <td class="text-center">   {location.state[0].price}  </td>
                                                                    <td class="text-end">   {location.state[0].price}  </td>
                                                                    </tr>

                                        
                                                            </tbody>
                                                        </table>
                                                    </div>
                    
                                                    <div class="row">
                                                        <div class="col-lg-4 col-sm-5">
                                                        
                                                        </div>
                                                        
                                                        <div class="col-lg-4 col-sm-5 ms-auto">
                                                            <table class="table table-clear">
                                                                <tbody>
               <tr>
                                                                  

  <tr>

                                                                        <td ><strong>Subtotal</strong> </td>
                                                                        <td class="text-end">{location.state[0].price}</td>
              
              </tr>
                                                                                     <tr>
                                                                        <td ><strong>Tax(18%)</strong></td>
                                                                        <td class="text-end">₹59.4</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td ><strong>Total</strong></td>
                                                                        <td class="text-end"><strong>₹{kl}</strong></td>
                                                                    </tr>
                                                                    </tr>
                                                               
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
     
          <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabelLogout">Ohh No!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Are you sure you want to logout?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                  <a href="login.html" class="btn btn-primary">Logout</a>
                </div>
              </div>
            </div>
          </div>

        </div>
    
          <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabelLogout">Ohh No!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Are you sure you want to logout?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                  <a href="login.html" class="btn btn-primary">Logout</a>
                </div>
              </div>
            </div>
          </div>

       
   
      </div>
 
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>copyright &copy; <script> document.write(new Date().getFullYear()); </script> - developed by
              <b><a href="https://omkatech.com/" target="_blank">Omka Tech LLP</a></b>
            </span>
          </div>
        </div>

        
      </footer>

    </div>
  </div>


  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>




</div> 
       
   );

}
export default Admin;