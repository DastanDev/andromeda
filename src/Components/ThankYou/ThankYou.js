import BtnCta from '../BtnCta/BtnCta'
import Img from './Img_08.jpeg'
import './ThankYou.scss'

export default function ThankYou() {
  return (
    <section className="thank-you">
      <div className="container">
        <div className="thank-you__left">
          <img src={Img} alt="astronaut" className='thank-you__img-tablet' />
          <div className="thank-you__block">
            <div className="thank-you__title">
              YOUR TRANSACTION HAS BEEN ACCEPTED! ANDROMEDA WILL BE SENT
              TO YOUR WALLET WITHIN <strong>24 HOURS.</strong>
            </div>
            <div className="thank-you__subtitle">
              JOIN OUR COMMUNITY ON
              SOCIAL NETWORKS AND YOU WILL
              CONSTANTLY KNOW THE SITUATION
              ON THE MARKET!
            </div>
          </div>
          <div className="thank-you__text">
            MOTIVATION FOR YOU: <br />
            A large number of financial analysts
            and traders say that the changes in the
            market will be significant by the end of
            this year, and with the appropriate choice
            of instruments (i.e. currency), it will be
            easy to move to a new level of the
            financial market. That is, right now the
            most convenient opportunity is to join
            this type of market and change your
            financial situation for the better. Thanks
            to our service, you can achieve your goals.
          </div>
          <BtnCta
            body='COME BACK'
            link='/'
            className='thank-you__btn'
          />
        </div>
        <div className="thank-you__right">
          <img src={Img} alt="astronaut" className='thank-you__img' />
        </div>
      </div>
    </section>
  )
}