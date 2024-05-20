import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css';
import HomeBuyer from '../buyers/Home';
import HomeSeller from '../sellers/Home';
import { UserContext } from '../UserContext';

const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user)

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user.id === 1 ? <HomeBuyer /> : <HomeSeller />}
    </>
  );
}

export default Home;
