import React from 'react';
import * as Styles from './ButtonStyles';
import { Link } from 'react-router-dom';
const Button = ({ children, to }) => {
  return (
    <Styles.ButtonContainer>
      <Link to={to}>{children}</Link>
    </Styles.ButtonContainer>
  );
};

export default Button;
