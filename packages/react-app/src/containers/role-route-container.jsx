import PropTypes from 'prop-types';

function RoleRoute({ isMatch, children }) {
  return isMatch && children;
}

RoleRoute.propTypes = {
  isMatch: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default RoleRoute;
