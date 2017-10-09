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
    const { width, height } = node.getBoundingClientRect();
    console.log('got width', width);
    this.setState({
      slideDimensions: { width, height },
    })
  }

  render() {
    const { slideDimensions, currentSlide } = this.state;
    const { height, width } = slideDimensions;
    const numberSlides = this.props.children.length;
    console.log('numberSlides', numberSlides);
    return (
      <div
        style={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'white'}}
        tabIndex="0"
        onKeyDown={this.handleKeyPress}
        ref={this.getNode}
        >
          <div style={{
            height,
            width: width * numberSlides,
            display: 'flex',
            flexWrap: 'nowrap',
            position: 'relative',
            right: currentSlide * width,
            transition: 'right 500ms ease-in-out'
          }}>
            {React.Children.toArray(this.props.children).map((child, i) => {
              return (
                <div
                  key={`SLIDE_${i}`}
                  style={{
                    ...slideDimensions,
                    display: 'flex',
                  }}
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
