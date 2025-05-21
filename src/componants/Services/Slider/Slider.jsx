import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FocusOnSelect({images}) {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container mt-5 m-5">
      <div>Click on any slide to select and make it current slide</div>
      <Slider {...settings}>
             {images.map((image) => (
                <div>
                    <img className="w-100" style={{height:"300px"}} src={image} />       
                </div>
            ))}

                
      </Slider>
    </div>
  );
}

export default FocusOnSelect;