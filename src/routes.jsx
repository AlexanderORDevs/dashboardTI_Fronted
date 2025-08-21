import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
} from '@heroicons/react/24/solid';
import { Home, Profile, Tables, Notifications } from '@/pages/dashboard';
import { SignIn } from '@/pages/auth';
import { CreateRegister } from '@/pages/uat';

const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: 'dashboard',
        path: '/home',
        element: <Home />,
        hidden: true,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: 'profile',
        path: '/profile',
        element: <Profile />,
        hidden: true,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: 'tables',
        path: '/tables',
        element: <Tables />,
        hidden: true,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: 'notifications',
        path: '/notifications',
        element: <Notifications />,
        hidden: true,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'Uat Test',
        path: '/uatRecords',
        element: <CreateRegister />,
      },
    ],
  },
  {
    title: 'auth pages',
    layout: 'auth',
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'sign in',
        path: '/sign-in',
        element: <SignIn />,
        hidden: true,
      },
    ],
  },
];

export default routes;
