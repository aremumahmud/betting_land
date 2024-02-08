import logo from '../logos/gambet-44.png'
import '../css/header.css'

function Header() {
  return (
    <div className="header container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navlist">
        <ul>
          <li>Whitepaper</li>
          <li>Tokenomics</li>
          <li>How to Join</li>
          <li>Roadmap</li>
          <li>Faqs</li>
        </ul>
      </div>
      <div className="play">
        <p>Play Now!</p>
      </div>
    </div>
  );
}


export default Header