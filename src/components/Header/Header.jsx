import PropTypes from "prop-types";
import img_header from "../../assets/HERO.png";
import "./Header.css";
const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="header-img">
        <img src={img_header} alt="" />
      </div>
      <div className="name-compañia">
        <p>@Chardnb - team 8</p>
      </div>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
