import React from 'react';
import './BtnCta.scss'
import isExternal from 'is-url-external';
import { Link } from 'react-router-dom';
// const propTypes = {
//   to: PropTypes.string.isRequired,
// };

const BtnCta = (props) => {
  const { body, link, className } = props
  const classes = className ? `BtnCta ${className}` : 'BtnCta'
  return (
    // <a className={classes} target="_blank" href={link}>{body}</a>
    // Link to={link}>{body}</Link>
    isExternal(link) ? <a href={link} className={classes}>{body}</a> : <Link to={link} className={classes}>{body}</Link>
  )
}

export default BtnCta