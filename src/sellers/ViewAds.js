import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import CardAds from '../home/CardAds';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Footer from '../Footer';

const ViewAds = () => {
  const { user} = useContext(UserContext);
  console.log(user)
    const [note, setNote] = useState([]);
    const [ads, setAds] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

 
  const goToPost = () => {
    navigate('/post-ad');
  };

  const fetchData = async() => {
    try {
      const response = await axios.get(`http://localhost:3307/ad/${user?.user?.id}`);
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
setNote(response.data)
      setAds(adsWithImages);
    }catch (error) {
        console.error('Error fetching ads:', error);
      }
    };
  
console.log(ads)
  return (
    <>  
    <div className='header2-img content-post '>
    <h2>Having a new home for rent?</h2>
    <Button onClick={goToPost} className='button-post'>Post AD</Button>
    </div> 
    <div className='ad-area row mb-5'>
    {/* <Ads /> */}
    <div><h1 className='m-3'>My Ads</h1></div>
    {ads.map((note) => (
        <div className='col-md-3 mb-5'>
    <CardAds key={note.id} data={note} />
    </div>
))}

</div>
    </>

 


  )
}

export default ViewAds