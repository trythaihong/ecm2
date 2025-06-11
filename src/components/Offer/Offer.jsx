import "./Offer.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exlusive</h1>
        <h1>offer for You</h1>
        <p>Only on best product</p>
        <button>Check now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;
