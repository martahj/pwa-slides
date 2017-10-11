// flow
import React from 'react';
import { COLOR_PALETTE } from '../constants';

type SlideWrapperProps = {
  children: Object,
};

const slideWrapperStyle = {
  backgroundColor: COLOR_PALETTE.E,
  color: COLOR_PALETTE.C,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  padding: '5%',
};

const SlideWrapper = (props: SlideWrapperProps)=> (
  <div style={slideWrapperStyle}>
    {props.children}
  </div>
);

export default SlideWrapper;
