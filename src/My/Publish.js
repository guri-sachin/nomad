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


function Admin()
{

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
            <h1 class="h3 mb-0 text-gray-800">Publish Sessions</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item">Live Sessions</li>
              <li class="breadcrumb-item active" aria-current="page">Publish Sessions</li>
            </ol>
          </div>

          <div class="row">
            <div class="col-lg-12">
          
              <div class="card mb-10">
                
                <div class="card-body">
                  <form>
                  <div class="form-group">
                      <label for="exampleInputTitle">Title</label>
                      <input type="text" class="form-control" id="exampleInputtitle" aria-describedby="planTitle" placeholder="Enter Title" style={{height: "calc(1.5em + 0.75rem + 1px)!important;"}} />
                      </div>
                      
                      <div class="form-group">
                      <label for="exampleInputDescription">Description</label>
                      <input type="text" class="form-control" id="exampleInputDescription" aria-describedby="planDescription" placeholder="Enter Description" style={{height: "calc(1.5em + 0.75rem + 3px)!important;"}} />
                      </div>
                      
                      
                      <div class="form-group">
                      <label for="exampleInputTime">Select a time</label>
                      <input type="time" id="appt" name="appt" class="form-control" style={{height: "calc(1.5em + 0.75rem + 1px)!important"}} />
                      </div>
                      
                      <div class="form-group">
                      <label for="exampleInputDescription">Session Link</label>
                      <input type="text" class="form-control" id="exampleInputSession" aria-describedby="planSession" placeholder="Enter Session Link" style={{height: "calc(1.5em + 0.75rem + 3px)!important;"}} />
                      </div>
                  
                  
                  
                    
                    
                    
                    
                    
                    
                    
                    
                    
                  
                    
                    
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>

      
              
            </div>

            
          </div>
       
          <div class="card-body"  align="right">
               
                  <a href="message.html"><button type="button" class="btn btn-outline-primary mb-1">Back</button></a>
                 
                  
                </div>
               

      
          <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabelLogout">Ohh No!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
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