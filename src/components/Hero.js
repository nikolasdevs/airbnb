import heroimg from "./../hero.png";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <img className="hero-img" src={heroimg} alt="image" />
      </div>
      <div className="hero-txt">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
