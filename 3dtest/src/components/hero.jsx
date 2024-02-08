import '../css/hero.css'
import image from '../images/back.webp'
import { FaTelegram , FaInstagram, FaFacebook,FaLinkedin,FaYoutube,FaDiscord,FaGithub , FaXTwitter}  from 'react-icons/fa6'

function Hero() {
  return (
    <div
      className="hero"
      style={{
        background: ` linear-gradient(0deg, rgb(0 0 0 / 55%), rgb(18 18 18 / 74%)),url(${image}),#d3d3d3 50%/cover no-repeat`,
      }}
    >
      <div className="left_hero container_left">
        <div className="links">
          <ul>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaDiscord />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </div>
        <p className="title">Web3 Raffle & Games in your favor.</p>
        <p className="sub_title">
          Highest Odds, Highest number of Winners, Highest Security &
          transparency via blockchain
        </p>
        <div className="ctas">
          <p>Whitepaper</p>
          <p>Audit Report</p>
          <p>Play Raffle</p>
        </div>
      </div>
      <div className="right_hero"></div>
    </div>
  );
}

export default Hero