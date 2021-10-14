import './Tokenomics.scss'
import CategoryName from '../CategoryName/CategoryName'
import TokenomicsImg from '../../Components/Tokenomics/images/tokenomix.jpg'
import AndromedaGal from '../../Components/Tokenomics/images/andromeda_gal.svg'
import MilkiwayGal from '../../Components/Tokenomics/images/milkiway_gal.svg'
import TokenshipTotal from '../../Components/Tokenomics/images/tokenship_total.svg'
const Ship = () => {
  return (
    <div className="tokenomics__balance-wrapper">
      <div className="tokenomics__balance-p2">
        <img className="tokenomics__tokenship-total" src={TokenshipTotal} alt="" />
        <p className="tokenomics__amount">COLLECTED - <span className="tokenomics__balance">0</span> $</p>
      </div>
    </div>
  )

}
const copyToClip = () => {
  const toolTip = document.querySelector(".tokenomics__tooltip")
  const tokenNumber = document.querySelector(".token_number")
  if (tokenNumber) {
    navigator.clipboard.writeText(tokenNumber.textContent)
    toolTip.classList.add("tokenomics__tooltip--active")

    setTimeout(() => {
      toolTip.classList.remove("tokenomics__tooltip--active")
    }, 1000);
  }
}
// const balanceProc = 0
const moveShip = (balanceProc) => {
  const ship = document.querySelector('.tokenomics__balance-wrapper')
  // console.log(ship);
  if (balanceProc < 10) {
    ship.style.top = "50%"
    ship.style.left = "6%"
  } else if (balanceProc < 20) {
    ship.style.top = "51%"
    ship.style.left = "11%"
  } else if (balanceProc < 30) {
    ship.style.top = "49%"
    ship.style.left = "19%"
  } else if (balanceProc < 40) {
    ship.style.top = "44%"
    ship.style.left = "25%"
  } else if (balanceProc < 50) {
    ship.style.top = "37%"
    ship.style.left = "27%"
  } else if (balanceProc < 60) {
    ship.style.top = "34%"
    ship.style.left = "26%"
  } else if (balanceProc < 70) {
    ship.style.top = "26%"
    ship.style.left = "23%"
  } else if (balanceProc < 80) {
    ship.style.top = "21%"
    ship.style.left = "24%"
  } else if (balanceProc < 90) {
    ship.style.top = "15%"
    ship.style.left = "30%"
  } else if (balanceProc < 100) {
    ship.style.top = "13%"
    ship.style.left = "36%"
  }
  else {
    ship.style.display = 'none'
  }
}

const setBalance = (amount) => {
  document.querySelector('.tokenomics__balance').textContent = amount.toFixed(2)
}
const getBalance = () => {
  const host = `${window.location.origin}/controller/balance.php?getBalance`
  const { REACT_APP_ONE_BNB } = process.env
  fetch(host)
    .then(res => res.text())
    .then(bnb => {
      const exchange = REACT_APP_ONE_BNB
      const target = 225000
      const amountUsd = bnb * exchange
      const procent = amountUsd / target * 100
      moveShip(procent)
      setBalance(amountUsd)
    })
}

export default function Tokenomics() {
  getBalance()
  return (
    <div className="tokenomics">
      <div id="tokenomics"></div>
      <div className="container">
        <div className="category_name_wrapper">
          <CategoryName
            title='TOKENOMICS'
            subtitle="WE GIVE YOU THE OPPORTUNITY TO 
          ACHIEVE THE GOAL YOU HAVE BEEN 
          DREAMING ABOUT FOR A LONG TIME, 
          THAT IS, FINANCIAL INDEPENDENCE!"/>
        </div>
        <div className="tokenomics_table_wrapper">
          <div className="token_tabeles">
            <div className="andromeda_token first_two">
              <p>MAX SUPPLY <br className="br_to_space" /> <strong>Andromeda Token</strong><br className="br_to_delete" /></p>
              <p className="total">1.000.000.000.000.000</p>
            </div>
            <div className="andromeda_token first_two">
              <p>TOTAL SUPPLY <br className="br_to_space" /> <strong>Andromeda Token</strong> <br className="br_to_delete" /> </p> <p className="total"> 500.000.000.000.000</p>
            </div>
            <div className="andromeda_token andromeda_token_with_btn">
              <p>BURNED SUPPLY<br /><strong>Andromeda Token</strong></p>
              <p>50%</p>
              <a href="https://bscscan.com/tx/0xf61c177bd6a2d8a29a1e64ad093277061230ec6a60e9c46d82baf08a7904b1db">BSCSCAN</a>
            </div>
            <div className="andromeda_token andromeda_token_with_btn">
              <p>HOLDERS <br /><strong>Andromeda Token</strong></p>
              <a href="https://bscscan.com/token/0x3638edf484469fe27082f5b8389d5811e09a6772#balances">BSCSCAN</a>
            </div>
            <div className="andromeda_token andromeda_token_with_btn picture_on_btn">
              <div className="contact_number">
                <p>CONTRACT <br /> <strong></strong></p>
                <p className='token_number'>0x3638edf484469fe27082f5b8389d5811e09a6772</p>
              </div>

              <div className="contract_btn" onClick={copyToClip} ></div>
              <div className="tokenomics__tooltip">
                Copied!
              </div>
            </div>
          </div>
          <div className="tokenomics__wrapp">
            <div className="tokenomics__map">
              <img className="tokenomics__img" src={TokenomicsImg} alt="" />
              <img className="tokenomics__andromeda-gal" src={AndromedaGal} alt="" />
              <img className="tokenomics__milkiway-gal" src={MilkiwayGal} alt="" />
              <Ship></Ship>
            </div>
          </div>
        </div>
      </div>
    </div >
  )

}