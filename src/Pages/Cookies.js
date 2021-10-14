import Cookies from '../Components/Cookies/Cookies'
import CategoryName from '../Components/CategoryName/CategoryName';
import '../Components/HeaderLitepaper/HeaderLitepaper';


export default function CookiesPage() {
  return (
    <>
      <div className="headerlitepaper">
        <div className="container">
          <a className="come_back" href="/">
            <p>COME BACK</p>
          </a>
          <CategoryName
            title="COOKIES"
            subtitle="WITH THIS DOCUMENT, YOU WILL 
        GET MORE DETAILED INFORMATION 
        ABOUT COOKIES. "
          />
          <div className="seemore_text">
            <p className="seemore">SEE MORE</p>
          </div>
        </div>
      </div>
      <Cookies />
    </>
  )
}