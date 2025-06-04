import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Auth, Uat } from '@/layouts';
import { Home } from '@/pages/dashboard';
import { ProtectedRoute } from '../src/routesProtect/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/uat/*"
        element={
          <ProtectedRoute>
            <Uat />
          </ProtectedRoute>
        }
      />

      {/* Public routes */}
      <Route
        path="/auth/*"
        element={
          <>
            <Auth />
          </>
        }
      />

      {/* Default redirection */}
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;
