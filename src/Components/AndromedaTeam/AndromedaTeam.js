import CategoryName from '../CategoryName/CategoryName'
import './AndromedaTeam.scss'
import Karol from '../../Assets/andromeda_team/Karol.png'
import Ali from '../../Assets/andromeda_team/Ali.png'
import Mathieu from '../../Assets/andromeda_team/Mathieu.png'
import AndromedaTeam from '../../Assets/photos/Img_05.jpeg'

export default function AndromedaTea() {
  return (
    <div className="andromedateam">
      <div id="team"></div>
      <div className="container">
        <CategoryName
          title='ANDROMEDA TEAM'
          subtitle="SUCCESS STORIES ARE WRITTEN BY 
        PEOPLE WHO STUBBORNLY PURSUE 
        THEIR GOALS, AND THEY DON'T 
        STEP BACK!"/>
        <div className="name_position_wrapper">
          <div className="name_position">
            <img src={Karol} alt="" />
            <div className="name_position_p">
              <p className="name_team">KAROL ZACHARSKI</p>
              <div className="position_team_link">
                <p className="position_team">CEO</p>
                <a href="https://pl.linkedin.com/in/karol-zacharski-64870620b"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12.1615V19.5556H15.7134V12.6567C15.7134 10.9236 15.0933 9.74089 13.5417 9.74089C12.3572 9.74089 11.6524 10.538 11.3423 11.309C11.2292 11.5847 11.2001 11.9683 11.2001 12.3542V19.5556H6.91198C6.91198 19.5556 6.96973 7.87112 6.91198 6.66052H11.1997V8.48835C11.191 8.50202 11.1797 8.51676 11.1715 8.53001H11.1997V8.48835C11.7693 7.61096 12.7867 6.35758 15.0638 6.35758C17.885 6.35753 20 8.20061 20 12.1615ZM2.42646 0.444443C0.959506 0.444443 0 1.40665 0 2.67198C0 3.90973 0.931746 4.90114 2.36954 4.90114H2.39818C3.89355 4.90114 4.82352 3.90992 4.82352 2.67198C4.79535 1.40665 3.89355 0.444443 2.42646 0.444443ZM0.254675 19.5556H4.54114V6.66052H0.254675V19.5556Z" fill="#CCE1FF" />
                </svg></a>
              </div>
            </div>
          </div>
          <div className="name_position">
            <img src={Ali} alt="" />
            <div className="name_position_p">
              <p className="name_team">ALI KOZ</p>
              <div className="position_team_link">
                <p className="position_team">CMO</p>
                <a href="https://uk.linkedin.com/in/cmoandromeda"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12.1615V19.5556H15.7134V12.6567C15.7134 10.9236 15.0933 9.74089 13.5417 9.74089C12.3572 9.74089 11.6524 10.538 11.3423 11.309C11.2292 11.5847 11.2001 11.9683 11.2001 12.3542V19.5556H6.91198C6.91198 19.5556 6.96973 7.87112 6.91198 6.66052H11.1997V8.48835C11.191 8.50202 11.1797 8.51676 11.1715 8.53001H11.1997V8.48835C11.7693 7.61096 12.7867 6.35758 15.0638 6.35758C17.885 6.35753 20 8.20061 20 12.1615ZM2.42646 0.444443C0.959506 0.444443 0 1.40665 0 2.67198C0 3.90973 0.931746 4.90114 2.36954 4.90114H2.39818C3.89355 4.90114 4.82352 3.90992 4.82352 2.67198C4.79535 1.40665 3.89355 0.444443 2.42646 0.444443ZM0.254675 19.5556H4.54114V6.66052H0.254675V19.5556Z" fill="#CCE1FF" />
                </svg></a>
              </div>
            </div>
          </div>

          <div className="name_position">
            <img src={Mathieu} alt="" />
            <div className="name_position_p">
              <p className="name_team">MATHIEU GUICHETEAU</p>
              <div className="position_team_link">
                <p className="position_team">Head of Graphic design</p>
                <a href="https://www.linkedin.com/in/mathieu-guicheteau/"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12.1615V19.5556H15.7134V12.6567C15.7134 10.9236 15.0933 9.74089 13.5417 9.74089C12.3572 9.74089 11.6524 10.538 11.3423 11.309C11.2292 11.5847 11.2001 11.9683 11.2001 12.3542V19.5556H6.91198C6.91198 19.5556 6.96973 7.87112 6.91198 6.66052H11.1997V8.48835C11.191 8.50202 11.1797 8.51676 11.1715 8.53001H11.1997V8.48835C11.7693 7.61096 12.7867 6.35758 15.0638 6.35758C17.885 6.35753 20 8.20061 20 12.1615ZM2.42646 0.444443C0.959506 0.444443 0 1.40665 0 2.67198C0 3.90973 0.931746 4.90114 2.36954 4.90114H2.39818C3.89355 4.90114 4.82352 3.90992 4.82352 2.67198C4.79535 1.40665 3.89355 0.444443 2.42646 0.444443ZM0.254675 19.5556H4.54114V6.66052H0.254675V19.5556Z" fill="#CCE1FF" />
                </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div className="austronaut"> {
          <img src={AndromedaTeam} alt="" />
        }
        </div>
      </div>
    </div>
  )
}