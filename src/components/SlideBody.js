// @flow
import React from 'react';

type SlideBodyProps = {
  children: Object,
};

const slideBodyStyle = {
  width: '100%',
  textAlign: 'left',
};

const SlideBody = (props: SlideBodyProps) => (
  <div style={slideBodyStyle}>
    {props.children}
  </div>
);

export default SlideBody;
