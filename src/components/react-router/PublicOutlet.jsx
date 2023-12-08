import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { useAlert } from '../../hooks';

function PublicOutlet() {
  const { currentUser } = useAuth();

  if (currentUser) {
    useAlert('error', 'already-logged-in');
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export default PublicOutlet;
