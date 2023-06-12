import AboutSec from "../../components/aboutSec/AboutSec";
import MenuSec from "../../components/menuSec/MenuSec";
import ContactSec from "../../components/contactSec/contactSec";
import "./home.scss";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="heroSec">
        <div className="wrapper">
          <div className="heroContainer">
            <img
              src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686381178/restaurant/TEXT_eu1gga.png"
              alt=""
            />
            <Link to="/menu">
              <button>VIEW MENU</button>
            </Link>
          </div>
        </div>
      </section>
      <div className="flotCardContainer">
        <div className="floatCard">
          <div className="wrapper">
            <img
              src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686383638/restaurant/dish_i9ufry.png"
              alt=""
            />
            <h4>
              Magical <span>Atmosphere</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            </p>
          </div>
        </div>
        <div className="floatCard">
          <div className="wrapper">
            <img
              src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686383638/restaurant/dish_i9ufry.png"
              alt=""
            />
            <h4>
              Magical <span>Atmosphere</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            </p>
          </div>
        </div>
        <div className="floatCard">
          <div className="wrapper">
            <img
              src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686383638/restaurant/dish_i9ufry.png"
              alt=""
            />
            <h4>
              Magical <span>Atmosphere</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            </p>
          </div>
        </div>
      </div>
      <MenuSec />
      <AboutSec />
      <ContactSec />
    </>
  );
};

export default Home;
