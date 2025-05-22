import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Aboutus.css';

export default function Aboutus() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setStartAnimation(true), 300);
    const overlayTimer = setTimeout(() => setShowOverlay(true), 1300);
    const textTimer = setTimeout(() => setShowText(true), 2100);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(overlayTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="aboutus-page pb-5">
      <div className="image-container">
        <img
          src={require('../../img(sodic)/img71.jpg')}
          alt="About Us"
          className="aboutus-image"
        />
        {showOverlay && (
          <motion.div
            className="black-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        )}
        <div className="overlay-content">
          <motion.h1
            className="aboutus-title"
            initial={{ scale: 2, y: '-50%', opacity: 0 }}
            animate={startAnimation ? { scale: 1, y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            About Sodic
          </motion.h1>

          {showText && (
            <motion.p
              className="overlay-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              Welcome to our company. We are committed to excellence and innovation.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
