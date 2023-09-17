import "./Grid.css";
import PropTypes from "prop-types";
const Grid = ({ rows, columns, children }) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${rows}, auto)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

export default Grid;
