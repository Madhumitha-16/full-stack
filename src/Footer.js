import React from 'react'
import { HomeOutlined, FacebookOutlined, InstagramOutlined,YoutubeOutlined,PinterestOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='footer text-center'><h6 className='typewrite ml-3 mt-3 pt-3'>    <HomeOutlined />
    {" "}Rentify - Renting Made Simple!</h6>
    <hr></hr>
    <p className='ml-3'>Follow us on: <FacebookOutlined />{" "}<InstagramOutlined />{" "}<YoutubeOutlined />{" "}<PinterestOutlined /></p>
</div>
)
}

export default Footer