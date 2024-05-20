import React from 'react'
import NavbarSeller from './NavbarSeller'
import { Button } from 'antd'
import {RightOutlined} from '@ant-design/icons';
import home from '../images/home.png'

const HomeSeller = () => {
  return (
    <>
        <NavbarSeller />
        <div class="header container m-5">
        <div class="row justify-content-start">
            <div class="content col-lg-5 col-md-6 col-12">
                <h1 className='typewrite'>Rentify - Renting Made Simple</h1>
                {/* <h3>Choose your dream home in </h3>
                <h3>your <span className='typewrite'>{typewrite}</span></h3> */}
                <Button className='button' icon={<RightOutlined />} iconPosition="end">Explore More</Button>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
                <div class="header-img">
                    <img src={home} alt="Responsive image" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeSeller