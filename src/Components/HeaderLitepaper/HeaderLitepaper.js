import CategoryName from '../CategoryName/CategoryName';
import './HeaderLitepaper.scss';


export default function HeaderLitepaper() {
  return (
    <div className="headerlitepaper">
      <div className="container">
        <a className="come_back" href="/">
          <p>COME BACK</p>
        </a>
        <CategoryName
          title="LITEPAPER"
          subtitle="WITH THIS DOCUMENT, YOU WILL 
        GET MORE DETAILED INFORMATION 
        ABOUT ANDROMEDA TOKEN. "
        />
        <div className="seemore_text">
          <p className="seemore">SEE MORE</p>
        </div>
      </div>
    </div>
  )
}