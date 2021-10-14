import './CategoryNameHeader.scss';
import { Component } from 'react';

class CategoryNameHeader extends Component {
  render() {
    const { title, subtitle, subtitle2, text, text2 } = this.props

    const content2 = <div className="category-name-header__subtitle">
      <span>{subtitle2}</span><br /> {text2}
    </div>
    return (
      <div className="category-name-header">
        <h2 className="category-name-header__title">{title}</h2>
        <div className="category-name-header__content">
          <div className="category-name-header__subtitle">
            <span>{subtitle}</span><br /> {text}
          </div>
          {subtitle2 ? content2 : ""}
        </div>
      </div>
    )
  }
}
export default CategoryNameHeader;