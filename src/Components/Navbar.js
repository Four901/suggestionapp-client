import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Favicon from './Favicon';
import { faCoffee,faPlusCircle,faHome,faSearch,faArrowTrendUp,faMedal,faAnglesDown,faUsers,faUser,faVideoCamera,faPodcast,faLightbulb, faBell, faSign, faSignIn} from '@fortawesome/free-solid-svg-icons';

import { faGithub} from '@fortawesome/free-brands-svg-icons'
import {
   Link,
  useNavigate
  } from 'react-router-dom'

const Navbar = (props) => {
    const navigate=useNavigate()
  //  let location = useLocation();

   /* useEffect(() => {
      console.log(location.pathname)
    }, [location]);*/
   
    const handleLougout=()=>{
      localStorage.removeItem("token")
      
      localStorage.removeItem("name")

      navigate("/sign-in")
    }
  
   
  return (
    
  <nav className="navbar navbar-expand-lg navbar-dark" style={{width:'100%',height:'100%',backgroundColor:'#ff5c33',textEmphasisColor:'#3333cc',position:'sticky',top:'0'}}>
  <div className="container-fluid">
  <ul className="navbar-nav me-auto mb-2 mb-lg-1">
        <li className="nav-item">
          
          <Link className="nav-link mx-2" aria-current="page" to="/"> <div>
            
           <span style={{color:"#000066",fontFamily:"Garamond",fontSize:"25px"}} data-toggle="tooltip" data-placement="bottom" title="Spardha - Bunik Iocian" >SPARDHA</span>
            </div>
            <i style={{color:"#ffffff",fontFamily:"Garamond",fontSize:"15px"}} data-toggle="tooltip" data-placement="bottom" title="Spardha - Bunik Iocian" >BUnik Iocian</i>
             </Link>
          
         
        </li>
   </ul>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" data-toggle="tooltip" data-placement="bottom" title="Home" to="/"><FontAwesomeIcon className='fas  fa-2x' icon={faHome} /> </Link>
        </li>
        
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/trending"><FontAwesomeIcon className='fas  fa-2x' data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom" icon={faArrowTrendUp} /></Link>
        </li>
        
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/webinar"><FontAwesomeIcon className='fas  fa-2x' data-toggle="tooltip" data-placement="bottom" title="Webinars"  icon={faPodcast} /></Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/new-ideas"><FontAwesomeIcon className='fas  fa-2x' data-toggle="tooltip" data-placement="bottom" title="New Ideas" icon={faLightbulb} /></Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/spardha-community"><FontAwesomeIcon className='fas  fa-2x' data-toggle="tooltip" data-placement="bottom" title="Spardha Community" icon={faUsers} /></Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/leaderboard"><FontAwesomeIcon className='fas  fa-2x' data-toggle="tooltip" data-placement="bottom" title="LeaderBoard" icon={faMedal} /></Link>
        </li>
        <form className="d-flex mx-5 me-10" data-toggle="tooltip" data-placement="bottom" title="Type To Search">
        
        <input className="form-control form-control-lg me-4 border border-info rounded-pill " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-secondary" type="submit"><FontAwesomeIcon className='fa fa-1x' icon={faSearch} /></button>
      </form>
     

       
      </ul>


      {/*!localStorage.getItem("token")?
      <form className="d-flex">
        <Link className="btn btn-primary mx-2" to="/sign-in" role="button">Login</Link>
        <Link className="btn btn-primary mx-2" to="/sign-up" role="button">SignUp</Link>
  </form>:<button className='btn btn-primary' onClick={handleLougout}>Logout</button>*/}

      <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item mx-5">
        <Link className="nav-link" to="/notifications"><FontAwesomeIcon className='fas  fa-2x' data-toggle="tooltip" data-placement="bottom" title="Notifications" icon={faBell} /></Link>
        </li>
        {localStorage.getItem("token")!==""?
         <> <li className="nav-item ">
         <Link className="nav-link" to="/user-profile"><FontAwesomeIcon className='fas  fa-2x' icon={faUser} data-toggle="tooltip" data-placement="bottom" title="Profile"/></Link>
         </li>
          <li className="nav-item">
          <Link className="nav-link " to="/user-functions"><FontAwesomeIcon className='fas  fa-1x' data-toggle="tooltip" data-placement="bottom" title="User Dropdown" icon={faAnglesDown} /></Link>
         </li></>:<>
         <li className="nav-item ">
         <Link className="nav-link" to="/sign-up"><FontAwesomeIcon className='fas  fa-2x' icon={faSign} title="SignUp"/></Link>
         </li>
          <li className="nav-item">
          <Link className="nav-link " to="/sign-in"><FontAwesomeIcon className='fas  fa-1x'  title="SignIn" icon={faSignIn} /></Link>
         </li>
         </>
        
        }
       

      </ul>
    </div>
  </div>
</nav>

)
};

export default Navbar;
