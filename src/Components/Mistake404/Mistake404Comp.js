import BtnCta from '../BtnCta/BtnCta'
import './Mistake404Comp.scss'
import mistake_img from './images/Img_09.jpg'

export default function Mistake404Comp() {
  return (
    <section className="mistake">
      <div className="container">
        <div className="mistake__left">
          <div className="mistake__block">
            <div className="mistake__title">
              MISTAKE 404
            </div>
            <div className="mistake__subtitle">
              WE APOLOGIZE, BUT SOMETHING
              WENT WRONG, PLEASE TRY TO USE
              OUR SERVICE AGAIN.
            </div>
          </div>

          <BtnCta
            body='TRY AGAIN'
            link='/'
            className='mistake__btn'
          />
        </div>
        <div className="mistake__right">
          <img src={mistake_img} alt="astronaut" className='mistake__img' />
        </div>
      </div>
    </section>
  )
}