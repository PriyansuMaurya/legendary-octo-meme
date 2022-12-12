import "../App.css";
import linkedin from './logos/linkedin.png';
import twitter from './logos/twitter.png';
import github from './logos/github.png';
export default function Greeting() {
  return (
    <div id="cw-color-change">
      <div className="callout-wrapper">
        <p className="secondary-header-font">
          Solving problems with user-centric{" "}
          design
        </p>
        <p className="semi-link">Learn more about me </p>
        <a href="">
          <img className="footer-logo" src={linkedin}/>
        </a>
        <a href="">
          <img className="footer-logo" src={twitter}/>
        </a>
        <a href="">
          <img className="footer-logo" src={github}/>
        </a>
      </div>
    </div>
  );
}
