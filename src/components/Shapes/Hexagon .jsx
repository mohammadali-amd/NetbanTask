import PropTypes from 'prop-types';

const Hexagon = ({ fillColor }) => (
   <svg height="40" width="40" viewBox="0 0 100 100">
      <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill={fillColor} transform="rotate(90 50 50)" />
   </svg>
);

Hexagon.propTypes = {
   fillColor: PropTypes.string.isRequired,
};

export default Hexagon;
