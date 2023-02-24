import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';

function PrivateOutlet() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    showAlert('error', 'login-needed');
    return <Navigate to='/login' />;
  }
  return <Outlet />;
}

export default PrivateOutlet;
