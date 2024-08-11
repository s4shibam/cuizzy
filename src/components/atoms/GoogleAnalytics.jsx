import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);

    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search
    });
  }, [location]);

  return null;
};

export default GoogleAnalytics;
