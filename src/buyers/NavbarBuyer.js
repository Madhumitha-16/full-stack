import React from 'react'

const NavbarBuyer = () => {
  return (
    <nav className={`navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-2 px-lg-2`}>
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="typewrite">Rentify</h1>
          </a>
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
              <a href="#home" className="nav-item nav-link active">
                Home
              </a>
             
              <a href="#skill" className="nav-item nav-link">
                Skills
              </a>
             
              <a href="#service" className="nav-item nav-link">
                Achievements
              </a>
            </div>
            <a
              href="index.html"
              className="navbar-brand py-3 px-4 mx-3 d-none d-lg-block"
            >
              <h3 className="typewrite">Rentify</h3>
            </a>
            <div className="navbar-nav me-auto py-0">
            <a href="#service" className="nav-item nav-link">
                Experience
              </a>
              <a href="#project" className="nav-item nav-link">
                Projects
              </a>
              <a href="#team" className="nav-item nav-link">
                Certifications
              </a>
              
            </div>
          </div>
        </nav>
  )
}

export default NavbarBuyer