import './Planet.scss'
import React from 'react';

export default function Planet(props) {
  const { img, txt, className, switchPlanet } = props
  const clasess = `planet ${className ? className : ''}`
  return (
    <div className={clasess} onMouseEnter={() => {
      if (switchPlanet) {
        switchPlanet()
      }

    }}>
      <div className="planet__text">
        {txt}
      </div>
      <img className="planet__img" src={img} alt="" />
    </div>
  )
}