import ReactGA from 'react-ga4';

export default function useGAEventTracker(category = 'category') {
  const eventTracker = ({ action = 'Click', label = 'label' }) => {
    ReactGA.event({ category, action, label });
  };

  return eventTracker;
}
