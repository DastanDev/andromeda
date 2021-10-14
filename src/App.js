import Home from './Pages/Home'
import Litepaper from "./Pages/Litepaper";
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mistake404 from './Pages/Mistake404';
import "./App.scss"
import ThankYouPage from './Pages/ThankYouPage';
import CookiesPage from './Pages/Cookies';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


setInterval(window.onload = function () {
  const cookieContainer = document.querySelector(".cookie-container");
  const cookieButton = document.querySelector(".cookie-btn");
  if (cookieButton) {

    cookieButton.addEventListener("click", () => {
      cookieContainer.classList.remove("active");
      localStorage.setItem("cookieBannerDisplayed", "true");
    });

    setTimeout(() => {
      if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
      }
    }, 2000);
  }

});







function App() {
  return (
    <div className="App">
      <ReactNotification />

      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />

          </Route>
          <Route path="/Litepaper">
            <Litepaper />
          </Route>
          <Route path="/ThankYou">
            <ThankYouPage />
          </Route>
          <Route path="/Cookies">
            <CookiesPage />
          </Route>
          <Mistake404 />
          <Route>

          </Route>
        </Switch>
        <Footer />
      </Router>
      <div className="cookie-container">
        <div className="cookies_block">
          <p>
            This site uses cookies to offer you a better browsing experience.
            Find out more on <a href="/cookies">how we use cookies.</a>
          </p>
          <div className="btn_cookies">
            <button className="cookie-btn">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
