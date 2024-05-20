import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import home from '../images/home.png' 
import '../home/Home.css';
import {useTypewriter} from 'react-simple-typewriter';
import Data from '../home/Data';
import ScrollData from '../home/ScrollData';
import CardDetails from '../home/CardDetails';
import NavbarBuyer from './NavbarBuyer';
import { Button } from 'antd';
import {RightOutlined} from '@ant-design/icons';


const HomeBuyer = () => {

    const [typewrite] = useTypewriter({
        words:['Cost','Preferences','Place'],
        loop:{},
        typeSpeed: 50,
        deleteSpeed: 40
    })

  return (
    <>
   <NavbarBuyer />
        <div class="header container m-5">
        <div class="row justify-content-start">
            <div class="content col-lg-5 col-md-6 col-12">
                <h1 className='typewrite'>Rentify - Renting Made Simple</h1>
                <h3>Choose your dream home in </h3>
                <h3>your <span className='typewrite'>{typewrite}</span></h3>
                <Button className='button' icon={<RightOutlined />} iconPosition="end">Explore More</Button>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
                <div class="header-img">
                    <img src={home} alt="Responsive image" />
                </div>
            </div>
        </div>
    </div>
    <div className='mainarea'>
    
      <Data />
    </div>
    <CardDetails />

    <div className='count'>
    <div class="container text-center">
    <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
    </div>
   
    
  
</>
  )
}

export default HomeBuyer