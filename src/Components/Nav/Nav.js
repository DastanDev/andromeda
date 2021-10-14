import React, { Component } from 'react';
import './Nav.scss'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../../Assets/header/AndromedaLogo.svg'
import Instagram from './images/instagram.svg';
import Twitter from './images/twitter.svg';
import Discord from './images/discord.svg';
import Facebook from './images/facebook.svg';
import Linkedin from './images/linkedin.svg';
import Github from './images/git.svg';
import Telegram from './images/telegram.svg';

const Li = (props) => {
  const { body, active, link, changeActiveItemMenu } = props
  let classes = 'nav__list--item'
  classes += active ? ' active' : ''
  return <li
    className={classes}
    onClick={() => {
      document.querySelector('.nav').classList.remove('active')
      changeActiveItemMenu()
    }}
  ><Link to={link}>{body}</Link>
  </li>
}

class Nav extends Component {
  constructor(props) {
    super()
    this.state = {
      menuActive: false,
      menuItems: [
        { key: 1, menuItem: 'HOME', active: true, link: '/#' },
        { key: 6, menuItem: 'TOKENOMICS', active: false, link: '/#tokenomics' },
        { key: 2, menuItem: 'ABOUT', active: false, link: '/#about' },
        { key: 3, menuItem: 'LITEPAPER', active: false, link: '/#litepaper' },
        { key: 4, menuItem: 'ROADMAP', active: false, link: '/#roadmap' },
        { key: 5, menuItem: 'TEAM', active: false, link: '/#team' },
        { key: 7, menuItem: 'SUPPORT', active: false, link: '/#support' },
      ]
    }
  }
  toggleMenu() {
    this.setState({ menuActive: !this.state.menuActive })
  }
  changeActiveItemMenu(body) {
    this.setState({
      menuItems: this.state.menuItems.map((item) => {
        if (item.menuItem === body) {
          item.active = true
        } else {
          item.active = false
        }
        return item
      })
    })
  }

  render() {

    const classes = `nav ${this.state.menuActive ? 'active' : ''}`
    function test() {
      window.onscroll = function () {
        if (window.innerWidth > 764) {
          scrollFunction()
        }
      };

      function scrollFunction() {
        if (window.pageYOffset > 80) {
          document.querySelector(".nav").style = "height: 80px; background-color: #001838; transition: 0.5s";
        } else {
          document.querySelector(".nav").style = "height: 150px; background-color: transparent; transition: 0.5s";
        }
      }
    }
    test()

    return (
      <nav className={classes}>
        <div className="container">
          <Link to={'/'}><img className="nav__logo" src={Logo} alt="logo" /></Link>

          <ul className='nav__list'>
            <div className="nav__list__social">
              <a href="/"><img src={Instagram} alt="" /></a>
              <a href="https://twitter.com/andromeda_ex"><img src={Twitter} alt="" /></a>
              <a href="https://discord.com/invite/rXNSJmnT"><img src={Discord} alt="" /></a>
              <a href="https://www.facebook.com/AndromedaExchange"><img src={Facebook} alt="" /></a>
              <a href="/"><img src={Linkedin} alt="" /></a>
              <a href="/"><img src={Github} alt="" /></a>
              <a href="https://t.me/AndromedaExchange"><img src={Telegram} alt="" /></a>
            </div>
            {this.state.menuItems.map(({ menuItem, active, link }) => {
              return <Li key={menuItem} body={menuItem} active={active} link={link} changeActiveItemMenu={() => this.changeActiveItemMenu(menuItem)} />
            })}
          </ul>
          <div onClick={() => this.toggleMenu()} className="hamburger">
            <span></span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;