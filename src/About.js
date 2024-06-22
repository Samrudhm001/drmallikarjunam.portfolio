import "./css/About.css";
import BorderExample from "./BorderExample.js";
import college from "./images/Subject 2.png";
import WithHeaderAndQuoteExample from "./WithHeaderAndQuoteExample.js";
const About = () => {
  return (
    <div class="background">
      <p class="about-head">
        Work & <span class="blue">Experience</span>
      </p>
      <section className="sec adjust">
        <section class="sec adjust">
          <div class="about-contents">
            {" "}
            <img src={college} alt="college" class="college-img "></img>
            <div class="work floating animate"></div>
            <div class="education floating animate"></div>
            <div class="cards animate">{BorderExample()}</div>
          </div>
        </section>
      </section>

      <section className="quote sec">
        <section className="sec quote">{WithHeaderAndQuoteExample()}</section>
      </section>
    </div>
  );
};
export default About;
