import {
  HomeIcon,
  UserCircleIcon,
  ServerStackIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/solid';
import {
  Home,
  LandingTemplates,
  CreateRegister,
  Users,
} from '@/pages/dashboard';
import { SignIn } from '@/pages/auth';

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
      // Landing Manager
      {
        icon: <DocumentDuplicateIcon {...icon} />,
        name: 'Landing Template',
        path: '/landingTemplate',
        element: <LandingTemplates />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'Uat Test',
        path: '/uatRecords',
        element: <CreateRegister />,
      },

      {
        icon: <UserCircleIcon {...icon} />,
        name: 'Users',
        path: '/users',
        element: <Users />,
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
