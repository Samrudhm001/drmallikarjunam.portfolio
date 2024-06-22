import "./css/hero.css";
import DadPhoto from "./images/DadPhoto2.png";
const hero = () => {
  return (
    <>
      <div class="img-holder-1 floating"></div>
      <div class="img-holder-2 floating"></div>
      <section class="section0 sec">
        <section class="hero-contents sec">
          <img
            src={DadPhoto}
            alt="doctor operating animate"
            class="dadimg animate"
          ></img>
          <section class="hero-texts sec">
            <p class="hero-title floating02 ">
              Empowering <span>Lives</span> Through <span>Surgical</span>{" "}
              Excellence
            </p>
            <p class="hero-subhead animate">
              Expert in General and Genito-Urinary Surgery.
            </p>
          </section>
        </section>
      </section>
    </>
  );
};
export default hero;
