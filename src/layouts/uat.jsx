import { Routes, Route } from 'react-router-dom';
import { useMaterialTailwindController } from '@/context';
import { Sidenav, DashboardNavbar, Footer } from '@/widgets/layout';
import routes from '@/routes';

export function Uat() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === 'dark' ? '/img/logo-ct.png' : '/img/logo-ct-dark.png'
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === 'uat' &&
              pages.map(({ path, element }) => (
                <Route key={path || idx} exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}
Uat.displayName = '/src/layout/Uat.jsx';

export default Uat;
