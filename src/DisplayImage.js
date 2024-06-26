import React, { useState } from 'react';
import axios from 'axios';

const DisplayImage = () => {
  const [imageId, setImageId] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const handleIdChange = (e) => {
    setImageId(e.target.value);
  };

  const handleFetchImage = async () => {
    try {
      const response = await axios.get(`https://full-stack-virid.vercel.app/image/${imageId}`, {
        responseType: 'arraybuffer'
      });
      const base64 = btoa(
        new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      setImageSrc(`data:image/jpeg;base64,${base64}`);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };
  
console.log(imageSrc)
  return (
    <div>
      <input type="text" value={imageId} onChange={handleIdChange} placeholder="Enter image ID" />
      <button onClick={handleFetchImage}>Fetch Image</button>
      {imageSrc && <img src={imageSrc} alt="Fetched from database" />}
    </div>
  );
};

export default DisplayImage;
