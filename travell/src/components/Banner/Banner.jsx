import React from "react";

import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/image/slider/slider1.png";
import slider2 from "../../assets/image/slider/slider2.png";
import '../Banner/Banner.css';
function Banner() {
  return (
    <section className="slider">
      <Carousel variant="dark">
        <Carousel.Item>
          <img src={slider1} className="d-block w-100" text="First slide" />
          <Carousel.Caption>
            <div className="slider_des">
              <h5 className="heading">
                JOURNEY TO <span>EXPLOR WORLD</span>
              </h5>
              <p className="sub_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                corporis nobis, sunt iure odio aperiam.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slider2} className="d-block w-100" text="First slide" />
          <Carousel.Caption>
            <div className="slider_des">
              <h5 className="heading">
                EAUTIFUL PLACE
                <span>TO VISIT</span>
              </h5>
              <p className="sub_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                corporis nobis, sunt iure odio aperiam.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Banner;
