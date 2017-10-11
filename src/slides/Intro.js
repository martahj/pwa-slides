import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import { COLOR_PALETTE } from '../constants';

const Intro = () => (
  <SlideWrapper>
    <div style={{ width: '100%', textAlign: 'center', marginTop: '15%' }}>
      <h1 style={{ color: COLOR_PALETTE.A, opacity: .8 }}>
        Service Workers and Progressive Web Applications
      </h1>
      <h3>
        Marta Johnson
      </h3>
    </div>
  </SlideWrapper>
);

export default Intro;
