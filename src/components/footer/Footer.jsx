import "./footer.scss";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {BsFacebook,BsTwitter,BsLinkedin,BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="div">
          <h4>Contact Us</h4>
          <p>
            <CiLocationOn />
            Location
          </p>
          <p>
            <FiPhoneCall />
            call +987-82-18015
          </p>
          <p>
            <AiOutlineMail />
            Location
          </p>
        </div>
        <div className="div logoDiv">
          <img
            src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686378441/restaurant/LOGO_f58p1b.png"
            alt=""
          />
          <p>
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="iconContainer">
            <BsFacebook className="socialIcon"/>
            <BsTwitter className="socialIcon"/>
            <BsLinkedin className="socialIcon"/>
            <BsInstagram className="socialIcon"/>
          </div>
        </div>
        <div className="div">
          <h4>Opening Hours</h4>
          <p>Everyday</p>
          <p>10.00 Am -10.00 Pm</p>
        </div>
      </div>
      <div>
        <AiOutlineCopyrightCircle/>
        <p>2023 All Rights Reserved By ERestaurent</p>
      </div>
    </footer>
  );
};

export default Footer;
