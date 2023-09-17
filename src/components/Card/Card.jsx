import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ children, flexDirection, gap, alignItems }) => {
  return (
    <div
      className="card"
      style={{
        flexDirection,
        gap,
        alignItems: alignItems || "normal",
      }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  flexDirection: PropTypes.string,
  gap: PropTypes.string,
  alignItems: PropTypes.string,
};
export default Card;
