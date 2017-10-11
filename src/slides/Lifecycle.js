// @flow
import React, { PureComponent } from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';

type LifecycleProps = {
  activeSlide: boolean,
};

type LifecycleState = {
  bolded: boolean,
};

const lifecyleEvents = [
  'install',
  'activate',
  'message',
];

const functionalEvents = [
  'fetch',
  'sync',
  'push',
];

const willDiscussEvents = {
  install: true,
  activate: true,
  message: false,
  fetch: true,
  sync: true,
  push: false,
};

const boldedEventStyle = {
  fontWeight: 600,
};

const LIFECYLE_IMAGE_URL = 'https://bitsofco.de/content/images/2016/07/Lifecycle-3.png';

const toggleBoldOn = (): LifecycleState => ({ bolded: true });

class Lifecycle extends PureComponent<LifecycleProps, LifecycleState> {
  state = {
    bolded: false,
  };

  componentWillReceiveProps(nextprops: LifecycleProps): void {
    if (nextprops.activeSlide && !this.props.activeSlide) {
      window.addEventListener('keydown', this.handleKeyPress);
    }
    if (!nextprops.activeSlide && this.props.activeSlide) {
      window.removeEventListener('keydown', this.handleKeyPress);
    }
  }

  handleKeyPress = (event): void => {
    const { keyCode } = event;
    if (keyCode === 13) this.setState(toggleBoldOn);
  }

  render() {
    const { bolded } = this.state;
    return (
      <SlideWrapper>
        <SlideHeader>
          Lifecycle
        </SlideHeader>
        <SlideBody>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img src={LIFECYLE_IMAGE_URL} />
          </div>
          <div style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <h4>
                Lifecycle Events
              </h4>
              {lifecyleEvents.map(event => (
                <div style={{
                  ...((bolded && willDiscussEvents[event]) ? boldedEventStyle : {})
                }}>
                  {event}
                </div>
              ))}
            </div>
            <div>
              <h4>
                Functional Events
              </h4>
              {functionalEvents.map(event => (
                <div style={{
                  ...((bolded && willDiscussEvents[event]) ? boldedEventStyle : {})
                }}>
                  {event}
                </div>
              ))}
            </div>
          </div>
        </SlideBody>
      </SlideWrapper>
    );
  }
}

export default Lifecycle;
