import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselData from "./CarouselData";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 }
};

const MainCarousel = () => {
  const items = CarouselData.map((item, index) => (
    <div key={index} className="carousel-slide">
      <img
        className="carousel-img"
        src={item.image}
        alt={item.title}
        role="presentation"
      />
      <div className="carousel-overlay">
        <div className="carousel-content">
          <h2 className="carousel-title">{item.title}</h2>
          {item.link && (
            <Link to={item.link} className="carousel-btn">
              Shop Now
            </Link>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="carousel-wrapper">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        disableDotsControls
      />
    </div>
  );
};

export default MainCarousel;
