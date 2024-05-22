import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const NavbarBuyer = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-2 px-lg-2">
      <Link to="/" className="navbar-brand d-block d-lg-none">
        <h1 className="typewrite">Rentify</h1>
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
        className="collapse navbar-collapse justify-content-between py-2 py-lg-0"
        id="navbarCollapse"
      >
        <div className="navbar-nav ms-auto py-0">
          <Link to="/home" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/search" className="nav-item nav-link">
            Search
          </Link>
         
        </div>
        <Link
          to="/"
          className="navbar-brand py-3 px-4 mx-3 d-none d-lg-block"
        >
          <h3 className="typewrite"> <HomeOutlined /> Rentify</h3>
        </Link>
        <div className="navbar-nav me-auto py-0">
          <Link to="/request" className="nav-item nav-link">
          Requests
          </Link>
         
          <Link to="/" onClick={handleLogout} className="nav-item nav-link">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBuyer;
