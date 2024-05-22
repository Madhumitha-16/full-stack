import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css';
import HomeBuyer from '../buyers/Home';
import HomeSeller from '../sellers/Home';
import { UserContext } from '../UserContext';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const { user} = useContext(UserContext);
  console.log(user)
 
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
          {user?.user?.role === 1 ? <HomeBuyer /> : user?.user?.role === 2 ? <HomeSeller /> : <div>Invalid user role</div>}
          <main>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
