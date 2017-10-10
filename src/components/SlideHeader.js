// @flow
import React from 'react';

type SlideHeaderProps = {
  children: string,
};

const slideHeaderStyle = {
  width: '100%',
};

const SlideHeader = ({ children }: SlideHeaderProps) => (
  <h2 style={slideHeaderStyle}>
    {children}
  </h2>
);

export default SlideHeader;
