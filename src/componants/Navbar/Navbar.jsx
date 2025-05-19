import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    //Edit

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .navbar {
            transition: all 1s ease-in-out; /* Smooth transition for all changes */
          }
          .bg-body-white {
            background-color: #ffffff; /* White background */
            animation: fadeToWhite 1s ease-in-out; /* Animation when switching to white */
          }
          .navbar-dark {
            background-color: #212529; /* Dark background */
            animation: fadeToDark 1s ease-in-out; /* Animation when switching to dark */
          }
          @keyframes fadeToWhite {
            from {
              background-color: #212529; /* Start from dark */
              opacity: 0.7; /* Slight fade effect */
            }
            to {
              background-color: #ffffff; /* End at white */
              opacity: 1;
            }
          }
          @keyframes fadeToDark {
            from {
              background-color: #ffffff; /* Start from white */
              opacity: 0.7; /* Slight fade effect */
            }
            to {
              background-color: #212529; /* End at dark */
              opacity: 1;
            }
          }
        `}
      </style>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-dark navbar-dark' : 'bg-body-white'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img style={{ width: '130px' }} src={require('../../img(sodic)/SODIC_Logo_Teal_RGB.png')} alt="SodicLogo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contactus">
                  Contact Us
                </Link>
              </li>
             
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/aboutus">
                    About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}