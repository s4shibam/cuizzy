import ReactGA from 'react-ga4';

const useGAEventTracker = (category = 'category') => {
  const eventTracker = ({ action = 'Click', label = 'label' }) => {
    ReactGA.event({ category, action, label });
  };

  return eventTracker;
};

export default useGAEventTracker;
