import HeroImg from "../../assets/hero.png";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <section className="section-hero">
        <div className="left-text">
          <h1 className="hero-heading">
            We are a Full Service Laundry and Dry Cleaning Professionals.
          </h1>
          <div className="hero-para">
            Our speciality is to make your beloved clothes ready for your
            wardrobe, the way you like and fits in your robe. We understand your
            requirements, aim to deliver the same day or next day service and
            always strive to provide the best service.
          </div>
          <div className="hero-btn">
            Book Now
          </div>
        </div>
        <div className="right-img">
            <figure>
                <img src={HeroImg} alt="" />
            </figure>
        </div>

        <div className="custom-shape-divider-bottom-1732696408">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
