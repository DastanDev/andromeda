import React, { Component } from "react";
import Slider from "react-slick";
import './SlickSlider.scss'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import BntnUp from '../../Assets/icons/Icon_Arrow.svg'
import BntnDown from '../../Assets/icons/Icon_Arrow_down.svg'
import Planet from '../Planet/Planet'

export default class SlickSlider extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      prevArrow: <img className="planet-slider__arrow" src={BntnUp} alt="" />,
      nextArrow: <img className="planet-slider__arrow" src={BntnDown} alt="" />
    };
    const data = this.props.data
    return (
      <div className="planet-slider">
        <Slider {...settings}>
          {data.map(({ img, date, month, switchPlanet, text }) => {
            return (
              <div key={month}>
                <div className="planet-slider__planet">
                  <Planet
                    img={img}
                    txt={month}
                  />
                  <div className="planet-slider__text">
                    <p>{date}</p>
                    <ul>
                      {text.map((li) => {
                        return (
                          <li key={li}>{li}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}