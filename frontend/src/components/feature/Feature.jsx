import React from 'react';
import * as Styles from './FeatureStyles';
// import * as FontAwesome from 'react-icons/fa';

export const Feature = ({ Icon, iconLabel }) => {
  // const Icon = FontAwesome[iconName];
  return (
    <Styles.FeatureContainer>
      <Styles.FeatureCircle>{Icon}</Styles.FeatureCircle>
      <Styles.FeatureLabel>{iconLabel}</Styles.FeatureLabel>
    </Styles.FeatureContainer>
  );
};
