import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';

function PublicOutlet() {
  const { currentUser } = useAuth();

  if (currentUser) {
    showAlert('error', 'already-logged-in');
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export default PublicOutlet;
