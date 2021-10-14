import './Litepaper.scss'
import LitepaperPlanet from '../../Assets/photos/Img_03.jpeg'
import CategoryName from '../CategoryName/CategoryName'
import BtnCta from '../BtnCta/BtnCta'



export default function Litepaper() {
  return (
    <div className="litepaper">
      <div id="litepaper">

      </div>
      <div className="container">
        <div className="litepaper_wrapper">

          <CategoryName
            title='LITEPAPER'
            subtitle='WITH THIS DOCUMENT, YOU WILL GET MORE DETAILED INFORMATION ABOUT ANDROMEDA TOKEN.' />
          <div className="litepaper_text">
            <p className="litepaper_first_p" >ANDROMEDA TOKEN: <br />
              <br />
              General information.
              The aim of the project is to create a safe
              place for Binance Smart Chain, further
              called “BSC”, investors, by enabling
              high-quality project verification.
              Andromeda Exchange is the first place
              that will make sure BSC project is 100%
              safe and legitimate, this way investors
              can feel much more secured while
              investing their funds into one of them.
              Also, we will enable easy-to-use BSC
              token generator, with much cheaper price.</p>
            <img src={LitepaperPlanet} alt="" />
            <p className="litepaper_second_p">ANDROMEDA SECURITY. <br />
              Our plan to secure investors will be done
              in 2 phases.
              Phase 1 will be a very detailed
              KYC process of every token developer that
              will want to be listed on our exchange.
              Phase 2 will be a request of deposit of at
              least 50% of the liquidity value, which will
              be then shown on exchange directly as
              part of “safety score”.</p>
          </div>
          <div className="see_more_lite_paper">
            <BtnCta
              body='SEE MORE:'
              link='/litepaper'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
