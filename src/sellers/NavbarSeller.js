import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';


const NavbarSeller = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };
  
  return (
    <nav className={`navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5`}>
      <Link to="/home" className="navbar-brand d-block d-lg-none">
        <h1 className="fw-bold m-0 typewrite">Rentify</h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
        id="navbarCollapse"
      >
        <div className="navbar-nav ms-auto py-0">
          <Link to="/home" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/ads" className="nav-item nav-link">
            My Ads
          </Link>
        </div>
        <Link to="/home" className="navbar-brand py-3 px-4 mx-3 d-none d-lg-block">
          <h3 className="fw-bold m-0 typewrite"><HomeOutlined /> Rentify</h3>
        </Link>
        <div className="navbar-nav me-auto py-0">
          <Link to="/requests" className="nav-item nav-link">
            Request
          </Link>
          <Link to="/" onClick={handleLogout} className="nav-item nav-link">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSeller;
