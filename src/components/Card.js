import cardImg from "./../image12.png";
import { GrStar } from "react-icons/gr";

export default function Card() {
  return (
    <div className="cards">
      <div className="card-container">
        <img src={cardImg} alt="Card image" />
        <div className="card-details">
          <p>
            <GrStar className="icon" /> 5.0 <span>(6) &middot; USA</span>
          </p>
          <p>Life lessons with Katie Zaferes</p>
          <h3>
            From $136 <span>/ person</span>
          </h3>
        </div>
      </div>
      <div className="card-container second-card">
        <img src={cardImg} alt="Card image" />
        <div className="card-details">
          <p>
            <GrStar className="icon" /> 5.0 <span>(30) &middot; USA</span>
          </p>
          <p>Learn wedding photography</p>
          <h3>
            From $120 <span>/ person</span>
          </h3>
        </div>
      </div>
      <div className="card-container">
        <img src={cardImg} alt="Card image" />
        <div className="card-details">
          <p>
            <GrStar className="icon" /> 5.0 <span>(6) &middot; USA</span>
          </p>
          <p>Life lessons with Katie Zaferes</p>
          <h3>
            From $136 <span>/ person</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
