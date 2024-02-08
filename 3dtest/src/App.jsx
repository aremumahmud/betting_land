import Header from "./components/header";
import './App.css'
import Hero from "./components/hero";
import Marquee from "./components/marquee";
import Section from "./components/section";
import section_data from "./libs/section_data";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Marquee />
      <div className="section_wrap">
        {
        section_data.map(data => {
          return <Section key={Math.random()} title={data.title} cta={data.cta} text={data.text} image={data.image} direction={data.direction} />
        })
      }
      </div>
      
    </div>
  );
}

export default App;
