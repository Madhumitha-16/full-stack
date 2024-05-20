import React from 'react'
import { LikeOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
const { Meta } = Card;

const CardDetails = ({ title, description }) => {
  return (
    <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
        <LikeOutlined key="like"/>,
        <Button className='button' key="interested" type="link">I'm Interested</Button>

    ]}
   
  >
    <Meta
      title={title}
      description={description}
    />
  </Card>
  )
}

export default CardDetails