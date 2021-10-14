import './Exchange.scss'
import { Component } from 'react'

const { REACT_APP_ONE_ADRT_IN_BNB, REACT_APP_MAX_TRANSFER_VALUE_IN_BNB } = process.env

class Exchange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      andromeda: '',
      bnb: '',
      proportion: REACT_APP_ONE_ADRT_IN_BNB
    }
    this.bnbToAnd = this.bnbToAnd.bind(this)
  }

  bnbToAnd(event) {
    let newInp = event.target.value.replace(/[^0-9\.]/g, "").replace(/\.{2,}/, '.')
    // console.log(`newInp - ${newInp}`);
    if (newInp < 0.1) {
      newInp = 0.1
    }
    event.target.value = newInp
    this.setState({
      bnb: newInp,
      andromeda: newInp / this.state.proportion
    })

    // console.log(this.state);
  }
  render() {
    return (
      <div className="exchange">
        <form className="exchange__form">
          <div className="exchange__inputs">
            <input className="exchange__input exchange__input--bnb" min="0.1" step="0.1" type="number" placeholder="Limit: 0.01 - 10" pattern="[\d*]" onChange={this.bnbToAnd} />

            <input className="exchange__input exchange__input--andromeda" type="text" placeholder="0.0" value={this.state.andromeda} disabled />
          </div>
          <div className="exchange__buttons">
            <div className=" exchange__btn exchange__btn--connect" >1 - CONNECT WALLET</div>
            <div className="exchange__btn exchange__btn--swap" >2 - SWAP</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Exchange;