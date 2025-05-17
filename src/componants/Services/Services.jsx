import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 }, 
    visible: { opacity: 1, x: 0 }, 
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { opacity: 1, x: 0 },    
  }


  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center ServAdress mb-5"
      >
        <h2 className="Servh2">Services</h2>
      </motion.div>
      <div className="container">
        <div className="row gy-3">
          
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={leftVariants}
            transition={{ duration: 0.6 }}
            className="col-md-6"
          >
            <div className="item text-center">

              <figure className="position-relative">
                <img
                  className="w-100"
                  src={require('../../img(sodic)/img71.jpg')}
                  alt="service1"
                />
                <div className="LayerSrv">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Read
                    More
                  </p>
                </div>
                <figcaption>
                  <h2 className="position-absolute top-0 start-0 p-3 text-white">
                    Service 1
                  </h2>
                    <Link to="/itemdetails">
           <p className="position-absolute bottom-0 start-0 p-3 text-white figP">
                    Learn More
                  </p>
          </Link>
                </figcaption>
              </figure>
              <img className='w-25' src={require('../../img(sodic)/img107.jpg')} alt="" />
            </div>
          </motion.div>

      
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={rightVariants}
            transition={{ duration: 0.6 }}
            className="col-md-6"
          >
            <div className="item text-center">
              <figure className="position-relative">
                <img
                  className="w-100"
                  src={require('../../img(sodic)/img71.jpg')}
                  alt="service2"
                />
                <div className="LayerSrv">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Read
                    More
                  </p>
                </div>
                <figcaption>
                  <h2 className="position-absolute top-0 start-0 p-3 text-white">
                    Service 2
                  </h2>
                         <Link to="/itemdetails">
           <p className="position-absolute bottom-0 start-0 p-3 text-white figP">
                    Learn More
                  </p>
          </Link>
                </figcaption>
              </figure>
                 <img className='w-25' src={require('../../img(sodic)/img107.jpg')} alt="" />
            </div>
          </motion.div>

     
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
            variants={leftVariants}
            transition={{ duration: 0.6 }}
            className="col-md-6"
          >
            <div className="item text-center">
              <figure className="position-relative">
                <img
                  className="w-100"
                  src={require('../../img(sodic)/img71.jpg')}
                  alt="service3"
                />
                <div className="LayerSrv">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Read
                    More
                  </p>
                </div>
                <figcaption>
                  <h2 className="position-absolute top-0 start-0 p-3 text-white">
                    Service 3
                  </h2>
                         <Link to="/itemdetails">
           <p className="position-absolute bottom-0 start-0 p-3 text-white figP">
                    Learn More
                  </p>
          </Link>
                </figcaption>
              </figure>
                 <img className='w-25' src={require('../../img(sodic)/img107.jpg')} alt="" />
            </div>
          </motion.div>

         
          <motion.div
            ref={ref4}
            initial="hidden"
            animate={inView4 ? 'visible' : 'hidden'}
            variants={rightVariants}
            transition={{ duration: 0.6 }}
            className="col-md-6"
          >
            <div className="item text-center">
              <figure className="position-relative">
                <img
                  className="w-100"
                  src={require('../../img(sodic)/img71.jpg')}
                  alt="service4"
                />
                <div className="LayerSrv">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Read
                    More
                  </p>
                </div>
                <figcaption>
                  <h2 className="position-absolute top-0 start-0 p-3 text-white">
                    Service 4
                  </h2>
                          <Link to="/itemdetails">
           <p className="position-absolute bottom-0 start-0 p-3 text-white figP">
                    Learn More
                  </p>
          </Link>
                </figcaption>
              </figure>
                 <img className='w-25' src={require('../../img(sodic)/img107.jpg')} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}