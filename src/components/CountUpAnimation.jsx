import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CountUpAnimation({ end }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <>
      <CountUp delay={0.1} end={end} redraw={true}>
        {({ countUpRef, start }) => (
          <VisibilitySensor
            delayedCall
            onChange={(isVisible) => onVisibilityChange(isVisible) && start()}
          >
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
      +
    </>
  );
}

export default CountUpAnimation;
