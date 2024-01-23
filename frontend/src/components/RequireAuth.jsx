import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const location = useLocation();
  const contestant = JSON.parse(localStorage.getItem('contestant'));

  return contestant ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

export default RequireAuth;
