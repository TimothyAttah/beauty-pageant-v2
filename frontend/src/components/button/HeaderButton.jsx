import React from 'react';
import * as Styles from './ButtonStyles';
import { Link } from 'react-router-dom';

export const Button = ({ children, to, width }) => {
  return (
    <Styles.HeaderBtnContainer width={width}>
      <Link to={to}>{children}</Link>
    </Styles.HeaderBtnContainer>
  );
};
