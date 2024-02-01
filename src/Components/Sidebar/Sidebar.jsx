import React from 'react'
import "../Sidebar/Sidebar.css"
import image10 from  "../../../src/image/image 10.png"
import microsoft from "../../../src/image/microsoft-windows.png"
import profileimg1 from "../../../src/image/profile image1.png"
import profileimg2 from "../../../src/image/profile image 2.png"
import perfimg1 from "../../../src/image/pref image1.png"
import perfimg2 from "../../../src/image/profile image 2.png"
import actimage from "../../../src/image/act image.png"
import stdimage from "../../../src/image/std image.png"
import teacherImg from "../../../src/image/teacherimg.png"
import Assesment from "../../../src/image/Assessment img.png"
import office from "../../../src/image/office.png"
export const Sidebar = () => {
    const handleClick = () => {
       
        window.location.href = '/profile';
      };
  return (
    <div className='side-main'>
        <div className='logo-img'>
        <img src={image10} alt="err" />
        </div>
        <div className='dash'>
            <div className='sub-dash'>
            <img id='dash-img' src={microsoft} alt="" />  
            <p className='text-dash'>Dashboard</p>
            </div>
        </div>
        <div className='profile'>
            <img  id="prof-img1" src={profileimg1} alt="" />
            <p id='prof-text' onClick={handleClick}  >Profile</p>
            <img  id="prof-img2" src={profileimg2} alt="" />
        </div>
        <div className='performance'>
            <img  id="perf-img1" src={perfimg1} alt="" />
            <p id='perf-text'>Performance</p>
            <img  id="perf-img2" src={perfimg2} alt="" />
        </div>
        <div className='actionplan'>
            <img  id="act-img" src={actimage} alt="" />
            <p id='act-text'>Action plan</p>
        </div>
        <div className='std-profile'>
            <img  id="std-img" src={stdimage} alt="" />
            <p id='std-text'>Student profile</p>
        </div>
        <div className='teach-profile'>
            <img  id="teach-img" src={teacherImg} alt="" />
            <p id='teach-text'>Teachers profile</p>
        </div>
        <div className='Assessment'>
            <img  id="ass-img" src={Assesment} alt="" />
            <p id='ass-text'>Assessment</p>
        </div>
        <div className='office'>
            <img  id="off-img" src={office} alt="" />
            <p id='off-text'>Office</p>
        </div>
    </div>
  )
}
