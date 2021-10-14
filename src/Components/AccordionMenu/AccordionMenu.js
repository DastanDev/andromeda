import React from 'react'
import './AccordionMenu.scss'

const HOME = "HOME"
const ABOUT = "ABOUT"
const LITEPAPER = "LITEPAPER"
const ROADMAP = "ROADMAP"
const TEAM = "TEAM"
const TOKENOMICS = "TOKENOMICS"

const data = [
  {
    title: 'PAGES',
    HOME,
    ABOUT,
    LITEPAPER,
    ROADMAP,
    TEAM,
    TOKENOMICS
  },
]

export default class AccordionMenu extends React.Component {
  render() {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-li' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItemMenu {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItemMenu extends React.Component {
  state = {
    opened: false
  }
  // Opened() {
  //   if (window.innerWidth >= 768) {
  //     this.setState({
  //       opened: true
  //     })
  //   }
  // }

  render() {
    const {
      props: {
        title,
        HOME,
        ABOUT,
        LITEPAPER,
        ROADMAP,
        TEAM,
        TOKENOMICS

      },
      state: {
        opened
      }
    } = this

    return (

      <div
        {...{
          className: `accordion-menu, ${(opened && 'accordion-item--opened') || (window.innerWidth >= 768 && 'accordion-item--opened')}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }} />
        </div>
        <div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content_menu' }}>
            <ul>
              <li> <a href="/#" {...{ className: 'accordion-item__menu' }}>
                {HOME}
              </a></li>
              <li> <a href="/#about" {...{ className: 'accordion-item__menu' }}>
                {ABOUT}
              </a></li>
              <li><a href="/#litepaper"{...{ className: 'accordion-item__menu' }}>
                {LITEPAPER}
              </a></li>
              <li><a href="/#roadmap"{...{ className: 'accordion-item__menu' }}>
                {ROADMAP}
              </a></li>
              <li><a href="/#team"{...{ className: 'accordion-item__menu' }}>
                {TEAM}
              </a></li>
              <li><a href="/#tokenomics"{...{ className: 'accordion-item__menu' }}>
                {TOKENOMICS}
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
