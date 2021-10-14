import CategoryName from '../CategoryName/CategoryName'
import './RoadMap.scss'
import TokenShip from './images/TOKENSHIP.svg'
import TokenShipMob from './images/TOKENSHIPMOB.svg'
import Ruler_Astro from '../../Assets/icons/Ruler_Astro.svg'
import SlickSlider from '../../Components/SlickSlider/SlickSlider'
import April from './images/APRIL.svg'
import May from './images/MAY.svg'
import June from './images/JUNE.svg'
import July from './images/JULY.svg'
import August from './images/AUGUST.svg'
import September from './images/SEPTEMBER.svg'
import October from './images/OCTOBER.svg'
import November from './images/NOVEMBER.svg'
import January_2021_2022 from './images/JANUARY_2021_2022.svg'
import Planet from '../Planet/Planet'
import dots_1200 from './images/dots_1200.svg'
import cta_btn from './images/cta_btn.svg'

const data = [
  {
    img: April,
    date: 'APRIL 2021',
    text: ['Creating Andromeda idea and establishing core team.'
    ],
    month: 'April',
  },
  {
    img: May,
    date: 'MAY 2021',
    text: [
      'Deploying Andromeda Token.',
      'Expanding idea of the Andromeda Exchange.'
    ],
    month: 'May'
  },
  {
    img: June,
    date: 'JUNE 2021',
    text: [
      'Creating first website of Andromeda',
      'Creating Social Media for Andromeda Exchange',
      'Preparing first marketing strategies',
      'Start of the private presale',
      'Starting Airdrop Program.',
    ],
    month: 'June',
  },
  {
    img: July,
    date: 'JULY 2021',
    text: [
      'Rebranding to Andromeda 2.0',
      'Finishing new website',
      'First Public Presale',
      'End of Airdrop program.',
    ],
    month: 'July',
  },
  {
    img: August,
    date: 'AUGUST 2021',
    text: [
      'Second Public Presale',
      'Preparing for Launchpad ICO',
      'Publishing concept of Andromeda Exchange',
      'Publishing schedule of LiveStreams and AMA.',
    ],
    month: 'August',
  },
  {
    img: September,
    date: 'SEPTEMBER 2021',
    text: [
      'Alpha Preview of the Exchange',
      'Establishing first partnership',
      'Expanding Andromeda team.',
    ],
    month: 'September',
  },
  {
    img: October,
    date: 'OCTOBER 2021',
    text: [
      'Announcement of the first Pre-Listed token',
      'Ending of the Launchpad ICO.'],
    month: 'October',
  },
  {
    img: November,
    date: 'NOVEMBER 2021',
    text: [
      'Beta preview of the Exchange',
      'Second Partnership.',
    ],
    month: 'November',
  },
  {
    img: January_2021_2022,
    date: 'DECEMBER 2021/JANUARY 2022',
    text: [
      'Pre-Listing several new tokens',
      'Unlocking Launchpad tokens ',
      'Listing Andromeda Token on first exchange.',
    ],
    month: 'January 2021-2022'
  },
]

export default function RoadMap() {
  function switchPlanet(planet) {

    switch (planet) {
      case 'April':
        moveTo(2, 20)
        activateRuler(0)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'May':
        moveTo(13, 62)
        activateRuler(1)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'June':
        moveTo(23, 67)
        activateRuler(2)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'July':
        moveTo(36, 65)
        activateRuler(3)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'August':
        moveTo(40, 34)
        activateRuler(4)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'September':
        moveTo(61, 35)
        activateRuler(5)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'October':
        moveTo(75, 19)
        activateRuler(6)
        moveRullerTo(600)
        hideClickBanner()
        break;
      case 'November':
        moveTo(85, 26)
        activateRuler(7)
        moveRullerTo(600)
        hideClickBanner()
        break;
      case 'January 2021-2022':
        moveTo(87, 64)
        activateRuler(8)
        moveRullerTo(600)
        hideClickBanner()
        break;
      default:
        break;
    }
  }
  function moveRullerTo(left) {
    const ruler = document.querySelector('.roadmap__wrap')
    ruler.scrollLeft = left
  }
  function moveTo(left, top) {
    const tokenship = document.querySelector('.milkyway__tokenship')
    tokenship.style.left = `${left}%`
    tokenship.style.top = `${top}%`
  }
  function activateRuler(i) {
    const monthes = document.querySelectorAll('.n01')
    monthes.forEach(month => {
      month.classList.remove('n01--active')
    });
    monthes[i].classList.add('n01--active')

    const planets = document.querySelectorAll('.milkyway .planet')
    planets.forEach(planet => {
      planet.classList.remove('planet--active')
    });
    planets[i].classList.add('planet--active')
  }
  function hideClickBanner() {
    const ctaBtn = document.querySelector('.milkyway__cta').style.display = 'none'
    if (ctaBtn) {
      return
    }
  }
  return (
    <div className="roadmap">
      <div id="roadmap"></div>
      <div className="container">
        <CategoryName
          title='ROADMAP'
          subtitle='HERE YOU CAN SEE THE PATH THAT 
          WE HAVE PREPARED FOR YOUR 
          SUCCESS, AFTER PASSING IT, YOU 
          WILL REACH YOUR GOAL!'/>
        <div className="slickslider">
          <div className="title">
            <div className="title__text">
            </div>
            <div className="title__title title__title--big"></div>
          </div>
        </div>
        <div className="roadmap__wraper">
          <div className="tokenship_buttons">
            <img className="tokenship" src={TokenShipMob} alt="" />

          </div>
          <div className="month_column">
            <SlickSlider
              data={data}
            />
          </div>
        </div>
        <div className="milkyway">
          <div className="milkyway__wrap">
            <img className="milkyway__dots" src={dots_1200} alt="" />
            {
              data.map(({ img, month }) => {
                return (
                  <Planet key={month}
                    img={img}
                    txt={month}
                    switchPlanet={() => switchPlanet(month)}
                  />
                )
              })
            }
            <Planet className="milkyway__tokenship"
              img={TokenShip}
              txt='TOKENSHIP'
              switchPlanet={() => switchPlanet()}
            />
            <img className="milkyway__cta" src={cta_btn} alt="" />
          </div>
        </div>
        <div className="roadmap__wrap">
          <div className="roadmap__ruler">
            <img className="ruler_astro" src={Ruler_Astro} alt="" />
            <div className="time_title">
              <div className="n01">
                <p className="number_time">01</p>
                <span><strong>APRIL 2021</strong><br />
                  <ul>
                    <li>
                      Creating Andromeda
                      idea and establishing
                      core team.
                </li>
                  </ul>
                </span>
              </div>
              <div className="n01">
                <p className="number_time">02</p>
                <span><strong>MAY 2021</strong></span>
                <ul>
                  <li>
                    Deploying Andromeda Token.
              </li>
                  <li>
                    Expanding idea of the Andromeda Exchange.
              </li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">03</p>
                <span><strong>JUNE 2021</strong></span>
                <ul>
                  <li>
                    Creating first website of Andromeda
              </li>
                  <li>
                    Creating Social Mediafor Andromeda Exchange
              </li>
                  <li>
                    Preparing first marketing strategies
              </li>
                  <li>
                    Start of the private presale
              </li>
                  <li>
                    Starting Airdrop Program.
              </li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">04</p>
                <span><strong>JULY 2021</strong></span>
                <ul>
                  <li>Rebranding to Andromeda 2.0</li>
                  <li>Finishing new website</li>
                  <li>First Public Presale</li>
                  <li>End of Airdrop program.</li></ul>
              </div>
              <div className="n01">
                <p className="number_time">05</p>
                <span><strong>AUGUST 2021</strong></span>
                <ul>
                  <li>Second Public Presale</li>
                  <li>Preparing for Launchpad ICO</li>
                  <li>Publishing concept of Andromeda Exchange</li>
                  <li>Publishing schedule of LiveStreams and AMA</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">06</p>
                <span><strong>SEPTEMBER 2021</strong></span>
                <ul>
                  <li>Alpha Preview of the Exchange</li>
                  <li>Establishing first partnership</li>
                  <li>Expanding Andromeda team.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">07</p>
                <span><strong>OCTOBER 2021</strong></span>
                <ul>
                  <li>Announcement of the first Pre-Listed token</li>
                  <li>Ending of the Launchpad ICO.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">08</p>
                <span><strong>NOVEMBER 2021</strong></span>
                <ul>
                  <li>Beta preview of the Exchange</li>
                  <li>Second Partnership.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">09</p>
                <span><strong>DECEMBER 2021/JANUARY 2022</strong></span>
                <ul>
                  <li>Pre-Listing several new tokens</li>
                  <li>Unlocking Launchpad tokens </li>
                  <li>Listing Andromeda Token on first exchange.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">A</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="container__information">All above information are only estimated, events may be completed sooner or later than it states.</h2>
      </div>
    </div>
  )
}