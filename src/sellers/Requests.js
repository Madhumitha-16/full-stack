import React, { useContext, useEffect, useState } from 'react'
import NavbarSeller from './NavbarSeller'
import Footer from '../Footer'
import CardRequest from '../home/CardRequest';
import axios from 'axios';
import { UserContext } from '../UserContext';

const Requests = () => { const { user} = useContext(UserContext);

const [ads, setAds] = useState([]);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async() => {
  try {
    const response = await axios.get(`https://full-stack-virid.vercel.app/request/${user?.user?.id}`);
    const adsWithImages = response.data.map(ad => {
      if (ad.image) {
        const base64Image = btoa(
          new Uint8Array(ad.image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        return {
          ...ad,
          imageSrc: `data:image/jpeg;base64,${base64Image}`
        };
      }
      return ad;
    });
    setAds(adsWithImages);
  }catch (error) {
      console.error('Error fetching ads:', error);
    }
  };

return (

  <div><NavbarSeller /><div className='header2-img content-post '>
  <h2>Requests</h2>
  </div> 
  <div className='ad-area row mb-5'>
  <div><h1 className='m-3'></h1></div>
  {ads.map((note) => (
      <div className='col-md-3 mb-5'>
  <CardRequest key={note.id} data={note} />
  </div>
))}
</div>
<Footer />
</div>
)
}

export default Requests