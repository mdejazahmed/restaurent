import "./aboutSec.scss";

const AboutSec = () => {
  return (
    <section className="aboutSec">
      <div className="wrapper">
        <div className="left">
          <h4> 
            Discover <span>Our Story</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A interdum
            in nibh auctor aliquam facilisi velit vitae. Egestas cursus cursus
            egestas sapien. Morbi id in pulvinar lacinia ullamcorper proin a
            fermentum. Justo, mattis feugiat quis in donec molestie netus
            dignissim mi. Ultrices quis augue aliquam dictum elementum tempus.
            Purus dictum quam in massa, nunc, pellentesque nunc faucibus
            fermentum. Semper augue sit mattis auctor eget molestie risus dolor.
            Mauris dolor, phasellus vulputate ut lacus, vulputate. Diam{" "}
          </p>
          <div className="numContainer">
            <div className="num">
              <h5>93</h5>
              <p>Beverges</p>
            </div>
            <div className="num">
              <h5>206</h5>
              <p>Food Items</p>
            </div>
            <div className="num">
              <h5>71</h5>
              <p>Cooks</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686384972/restaurant/images_iv0ver.png"
            alt=""
          />
        </div>
      </div>
      <div className="aboutCounts">
        <div>
          <h4>93</h4>
          <p>Beverages</p>
        </div>
        <div>
          <h4>93</h4>
          <p>Dishes Menu</p>
        </div>
        <div>
          <h4>93</h4>
          <p>Location</p>
        </div>
        <div>
          <h4>93</h4>
          <p>Dishes Menu</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
