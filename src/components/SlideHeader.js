// @flow
import React from 'react';
import { COLOR_PALETTE } from '../constants';

type SlideHeaderProps = {
  children: string,
};

const slideHeaderStyle = {
  width: '100%',
  fontSize: '32px',
  // color: COLOR_PALETTE.A,
};

const SlideHeader = ({ children }: SlideHeaderProps) => (
  <h2 style={slideHeaderStyle}>
    {children}
  </h2>
);

export default SlideHeader;
