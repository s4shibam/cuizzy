import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { useAlert } from '../../hooks';

function PrivateOutlet() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    useAlert('error', 'login-needed');
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default PrivateOutlet;
