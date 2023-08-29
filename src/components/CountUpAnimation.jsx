import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CountUpAnimation({ end }) {
  return (
    <>
      <CountUp end={end} redraw={true} delay={0.1}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
      +
    </>
  );
}

export default CountUpAnimation;
