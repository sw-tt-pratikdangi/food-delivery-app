import { Navigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  if (!user) {
    return (
      <Navigate to="/login" />
    );
  }

  if (!user?.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;