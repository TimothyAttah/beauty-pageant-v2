import { useLocation, Navigate, Outlet } from 'react-router-dom';
export const contestantAuth = JSON.parse(localStorage.getItem('user'));

const RequireAuth = () => {
  const location = useLocation();

  return contestantAuth ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

export default RequireAuth;
