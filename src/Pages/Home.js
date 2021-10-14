import Header from '../Components/Header/Header'
import About from '../Components/About/About'
import Litepaper from '../Components/Litepaper/Litepaper'
import RoadMap from '../Components/RoadMap/RoadMap'
import AndromedaTeam from '../Components/AndromedaTeam/AndromedaTeam'
import Tokenomics from '../Components/Tokenomics/Tokenomics'
import './Home.scss'



export default function Home() {
  return (
    <>
      <Header />
      <Tokenomics />
      <About />
      <Litepaper />
      <RoadMap />
      <AndromedaTeam />
    </>
  )
}