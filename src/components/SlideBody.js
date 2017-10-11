// @flow
import React from 'react';

type SlideBodyProps = {
  children: Object,
};

const slideBodyStyle = {
  width: '100%',
  textAlign: 'left',
  fontSize: 24,
  display: 'flex',
  flexWrap: 'wrap',
};

const SlideBody = (props: SlideBodyProps) => (
  <div style={slideBodyStyle}>
    {props.children}
  </div>
);

export default SlideBody;
