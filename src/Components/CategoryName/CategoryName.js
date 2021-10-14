import './CategoryName.scss';
import { Component } from 'react';

class CategoryName extends Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <div className="category_name">
        <h2>{title}</h2>

        <h3 dangerouslySetInnerHTML={{ __html: subtitle }}></h3>
      </div>
    )
  }
}
export default CategoryName;