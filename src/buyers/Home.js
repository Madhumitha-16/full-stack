import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HomeOutlined,SearchOutlined,UsergroupAddOutlined } from '@ant-design/icons';
import home from '../images/home.png' 
import '../home/Home.css';
import {useTypewriter} from 'react-simple-typewriter';
import NavbarBuyer from './NavbarBuyer';
import NavbarHome from './NavbarHome';
import { Button } from 'antd';
import {RightOutlined} from '@ant-design/icons';
import Filter from './Filter';
import CardSlider from './CardSlider';
import { UserContext } from '../UserContext';
import Footer from '../Footer';


const HomeBuyer = () => {
  const { user} = useContext(UserContext);

    const [typewrite] = useTypewriter({
        words:['Cost','Preferences','Choice of Place'],
        loop:{},
        typeSpeed: 50,
        deleteSpeed: 40
    })
  return (
    <>
    {user?.user.role===1 ?
   <NavbarBuyer /> : <NavbarHome />
    }
   
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
    <Filter />
    <div className='count '>
    <div class="container mt-3 mb-5 ">
    <div class="row">
    <div class="col mt-3 box-1">
    <div className='text-center'>
    <HomeOutlined className='mb-2' style={{fontSize:"30px"}}/>
    </div>
    <h5>Discover your perfect home today!</h5>
    <p>Begin your search for the perfect home today! With our extensive listings and user-friendly search tools, finding your dream home has never been easier. Start exploring now and let us help you find your ideal living space.</p>
    </div>
    <div class="col  mt-3 box-2">
    <div className='text-center'>
    <SearchOutlined className='mb-2 text-center' style={{fontSize:"30px"}}/>
    </div>
    <h5>Find a home that suits your needs!</h5>
    <p>Embark on your journey to finding the ideal home that fits your every need. Whether you're seeking a cozy apartment in the heart of the city or a serene villa nestled in the countryside, we have a diverse range of properties waiting to be discovered. </p>
    </div>
    <div class="col mt-3 box-3">
    <div className='text-center'>
    <UsergroupAddOutlined className='mb-2' style={{fontSize:"30px"}}/>
    </div>
    <h5> Connect with the rental owners!</h5>
    <p>Unlock your ideal rental property by connecting directly with our trusted landlords! Don't delay – start browsing our listings and connecting with landlords today to find the ideal rental property that suits your lifestyle.</p>
    </div>
  </div>
</div>
    <CardSlider />

    </div>
   
    
  <Footer />
</>
  )
}

export default HomeBuyer