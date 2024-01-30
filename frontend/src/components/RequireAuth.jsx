import { useLocation, Navigate, Outlet } from 'react-router-dom';
export const contestantAuth = JSON.parse(localStorage.getItem('user'));
export const jwt = localStorage.getItem('jwt');
export const referenceCode = localStorage.getItem('referenceCode');
export const isActive = localStorage.getItem('isActive');

export const RequireAuth = () => {
  const location = useLocation();

  return contestantAuth && referenceCode ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

export const RequireConfirmation = () => {
  const location = useLocation();

  return isActive !== null && referenceCode ? (
    <Outlet />
  ) : (
    <Navigate to='/confirm-payment' state={{ from: location }} replace />
  );
};

export const RequireRegister = () => {
  const location = useLocation();

  return jwt ? (
    <Outlet />
  ) : (
    <Navigate to='/register' state={{ from: location }} replace />
  );
};
