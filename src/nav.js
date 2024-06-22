import "./css/nav.css";
import icon from "./images/Bigstock_277959148.jpg";

const Nav = () => {
  return (
    <>
      <nav>
        <img src={icon} alt="" class="icon"></img>
        <div class="icon-container">
          <p class="icon-text">DR MALLIKARJUNA M</p>
          <p class="icon-subhead">Urologist</p>
        </div>
      </nav>
    </>
  );
};
export default Nav;
