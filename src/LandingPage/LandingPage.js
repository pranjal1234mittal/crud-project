import React from 'react';
import "./LandingPage.css";
import GroupIcon from '@mui/icons-material/Group';
import ViewListIcon from '@mui/icons-material/ViewList';
import LogoutIcon from '@mui/icons-material/Logout';

function LandingPage() {
  return (
    <>
    <div className='landing-flex'>
    <ul className='menu'>
    <li><a href='/AddStudents'><span style={{height:"0px",}}><GroupIcon /></span>   Add Students</a></li>
    <li><a href='/ManageStudents'><span style={{height:"0px",}}><ViewListIcon /></span>  Manage Students</a></li>
    <li><a href='/Logout'><span style={{height:"0px",}}><LogoutIcon /></span>  Logout</a></li>
    </ul>
    </div>
    </>
  )
}

export default LandingPage
