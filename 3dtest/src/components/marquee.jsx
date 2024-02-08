import mark1 from '../images/mark1.png'
import mark2 from "../images/mark2.png";
import mark3 from "../images/mark3.png";
import mark4 from '../images/mark4.png'
import mark5 from '../images/mark5.png'
import mark6 from '../images/mark6.png'
import '../css/marquee.css'

function Marquee() {
  return (
    <div className="marquee_wrap">
      <marquee direction="ltr">
        <div className="marquee">
          <div>
            <img src={mark1} alt="" />
          </div>
          <div>
            <img src={mark2} alt="" />
          </div>
          <div>
            <img src={mark3} alt="" />
          </div>

          <div>
            <img src={mark4} alt="" />
          </div>
          <div>
            <img src={mark5} alt="" />
          </div>
          <div>
            {" "}
            <img src={mark6} alt="" />
          </div>
        </div>
      </marquee>
    </div>
  );
}

export default Marquee