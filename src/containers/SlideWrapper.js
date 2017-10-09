// flow
import React from 'react';

type SlideWrapperProps = {
  children: Object,
};

const slideWrapperStyle = {
  backgroundColor: 'blue',
  color: 'white',
  width: '100%',
  height: '100%',
  display: 'flex',
};

const SlideWrapper = (props: SlideWrapperProps)=> (
  <div style={slideWrapperStyle}>
    {props.children}
  </div>
);

export default SlideWrapper;
