import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FocusOnSelect() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
  };
  return (
    <div className="slider-container mt-5 m-5">
      <div>Click on any slide to select and make it current slide</div>
      <Slider {...settings}>
             <div>
                    <img className="w-100" style={{height:"300px"}} src={require("../../../img(sodic)/img112.jpg")} />        </div>
                <div>
                    <img className="w-100" style={{height:"300px"}} src={require("../../../img(sodic)/img137.jpg")} />        </div>
                <div>
                    <img className="w-100" style={{height:"300px"}} src={require("../../../img(sodic)/img114.jpg")} />
                </div>
                <div>
                    <img className="w-100" style={{height:"300px"}} src={require("../../../img(sodic)/img135.jpg")} />
                </div>
                <div>
                    <img className="w-100" style={{height:"300px"}} src={require("../../../img(sodic)/img130.jpg")} />
                </div>
                <div>
                    <img className="w-100" style={{height:"300px"}} src={require("../../../img(sodic)/img119.jpg")} />
                </div>
      </Slider>
    </div>
  );
}

export default FocusOnSelect;