import bubbles from '../../assets/bubbles.png';
import bubble from '../../assets/bubble.png';
import './background.css';

export default function Background({ children,className }) {
  return (
    <div className={`background-wrapper ${className}`}>
      <div className="background">
        <div className="bubbles-container">
          <figure className="right-bubble">
            <img src={bubbles} alt="" />
          </figure>
          <figure className="center-bubble">
            <img src={bubble} alt="" />
          </figure>
          <figure className="left-bubble">
            <img src={bubble} alt="" />
          </figure>
        </div>
      </div>
      <div className="foreground">{children}</div>
    </div>
  );
}
