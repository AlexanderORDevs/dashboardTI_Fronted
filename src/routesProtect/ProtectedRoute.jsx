import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/loginContext';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Load...</div>;

  if (!user) return <Navigate to="/auth/sign-in" replace />;
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
