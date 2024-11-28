import "./review.css";
import Slider from "react-slick";
import ReviewCard from "../Review/Review";
export default function Review() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="section-reviews-container">
        <div className="section-review">
          <h1 className="review-heading">
            Most Loved <span>Customer Reviews</span>
          </h1>
          <Slider {...settings}>
            <div>
              <ReviewCard />
            </div>
            <div>
              <ReviewCard />
            </div>
            <div>
              <ReviewCard />
            </div>
          </Slider>
        </div>
        <div className="all-review-btn">
          <button>See all Reviews</button>
        </div>
      </div>
    </>
  );
}
