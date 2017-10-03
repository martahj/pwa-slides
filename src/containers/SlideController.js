// @flow
import React, { PureComponent } from 'react';

type SlideControllerProps = {
  children: Object,
};

type SlideControllerState = {
  currentSlide: number,
  slideDimensions: {
    width: number,
    height: number,
  },
};

const incrementSlide = (state: SlideControllerState, props: SlideControllerProps) => ({
  currentSlide: Math.min(state.currentSlide + 1, React.Children.count(props.children) - 1)
});

const decrementSlide = (state: SlideControllerState, props: SlideControllerProps) => ({
  currentSlide: Math.max(state.currentSlide - 1, 0)
})

const updateSlideDimensions = (slideDimensions) => (
  state: SlideControllerState,
  props: SlideControllerProps,
) => ({ slideDimensions })

class SlideController extends PureComponent<SlideControllerProps, SlideControllerState> {
  constructor(props: SlideControllerProps) {
    super(props);
    this.state = {
      currentSlide: 0,
      slideDimensions: {
        width: 0,
        height: 0,
      }
    };
  }
  handleKeyPress = (event): void => {
    const { keyCode } = event;
    if (keyCode === 39) this.handleForwardPress();
    else if (keyCode ===37) this.handleBackPress();
  }

  handleBackPress = (): void => {
    this.setState(decrementSlide);
  }

  handleForwardPress = () => {
    this.setState(incrementSlide);
  }

  getNode = (node): void => {
    const { width, heigth } = node.getBoundingClientRect();
    this.setState()
  }

  render() {
    return (
      <div
        style={{ width: '50%', height: '50%', overflow: 'hidden', backgroundColor: 'black'}}
        tabIndex="0"
        onKeyDown={this.handleKeyPress}
        ref={this.getNode}
        >
          <div style={{ color: 'white' }}>{this.state.currentSlide}</div>
          <div>
            {React.Children.toArray(this.props.children).map((child, i) => {
              console.log('got slide', child);
              return (
                <div
                  key={`SLIDE_${i}`}
                  style={{ backgroundColor: 'blue' }}
                  >
                    {child}
                </div>
              );
            })}
          </div>
      </div>
    );
  }
}

export default SlideController;
