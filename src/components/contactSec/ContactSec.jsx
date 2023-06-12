import "./contactSec.scss";

const contactSec = () => {
  return (
    <section className="contactSec">
      <div className="wrapper">
        <h2>
          Book A <span>Table</span>
        </h2>
        <div>
          <form>
            <input type="text" placeholder="Your Name" required/>
            <input type="text" placeholder="Phone Number" required/>
            <input type="email" placeholder="Your Email" required/>
            <input type="number" placeholder="How Many Persons?" required/>
            <input type="date" />
            <button>BOOK NOW</button>
          </form>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14873.717743286801!2d81.6144573!3d21.254462399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1686481898448!5m2!1sen!2sin"></iframe>
          
        </div>
      </div>
    </section>
  );
};

export default contactSec;
