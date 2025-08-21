import { useNavigate } from 'react-router-dom';
import { Button, IconButton } from '@material-tailwind/react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { AuthContext } from '@/context/loginContext';

export function DashboardNavbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    logout();
    navigate('/auth/sign-in', { replace: true });
  };
  return (
    <div className="flex w-full items-center justify-end">
      <div className="flex items-center">
        <Button
          variant="text"
          color="blue-gray"
          className="hidden items-center gap-1 px-4 normal-case xl:flex"
          onClick={handleLogout}
        >
          <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
          Log out
        </Button>
        <IconButton
          variant="text"
          color="blue-gray"
          className="grid xl:hidden"
          onClick={handleLogout}
        >
          <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
        </IconButton>
      </div>
    </div>
  );
}

DashboardNavbar.displayName = '/src/widgets/layout/dashboard-navbar.jsx';

export default DashboardNavbar;
