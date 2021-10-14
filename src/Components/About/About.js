import './About.scss'
import AboutPlanet from '../../Assets/photos/Img_01.jpeg'
import CategoryName from '../CategoryName/CategoryName'

export default function About() {
  return (
    <div className="about">
      <div id="about"></div>
      <div className="container">
        <CategoryName
          title='ABOUT'
          subtitle='HAVE YOU EVER FELT UNSECURE WHILE INVESTING IN SMART CHAIN TOKEN? HAVE YOU EVER BEEN RUG PULLED? THESE DAYS ARE OVER, WITH US!'
        />
        <div className="about_wrapper">
          <p className="who_we_are_p">WHO WE ARE?<br />
            We are ANDROMEDA! The first
            smart chain exchange with insurance.
            Andromeda exchange is the first one
            that will serve only smart chain tokens
            with common pairs BSC/BTC/USDT/ETH,
            and also you will be able to exchange
            one smart chain token into another in just one click.</p>
          <div className="aboutplanet">
            <img src={AboutPlanet} alt="" />
          </div>
          <p className="what_are_the">WHAT ARE THE ADVANTAGES OF
            OUR EXCHANGE?
            That’s simple, tokens that want to be
            listed on our exchange will need to pass
            a series of requirements before they will
            be able to get listed.
            Only tokens that will
            prove that they are 100% rug proof will
            have possibility to join us.<br />
            <br />
            On the other hand, we also deployed our
            own smart chain token.
            ANDROMEDA
            TOKEN is little different as we will provide
            scheduled manual burns. <br />
            <br />
            What’s even better we will create
            easy-to-use and cheap-to-use BSC token
            creator.
            BSC tokens generators take about
            1.30 BNB in fees to create a token, that’s
            a robbery. Trust me.
            We will also provide
            detailed tutorials of how to take care
            of your token. FREE.</p>
        </div>
      </div>
    </div>
  )
}