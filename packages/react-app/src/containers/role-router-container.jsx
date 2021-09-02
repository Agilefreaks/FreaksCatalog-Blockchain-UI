import PropTypes from 'prop-types';
import React from 'react';

function isChildAMatch({ props }) {
  return props.isMatch;
}

function RoleRouter({ children }) {
  const child = React.Children.toArray(children).find(isChildAMatch);

  return child;
}

RoleRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoleRouter;
