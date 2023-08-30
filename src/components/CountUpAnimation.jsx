import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CountUpAnimation({ end }) {
  return (
    <>
      <CountUp delay={0.1} end={end} redraw={true}>
        {({ countUpRef, start }) => (
          <VisibilitySensor delayedCall onChange={start}>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
      +
    </>
  );
}

export default CountUpAnimation;
