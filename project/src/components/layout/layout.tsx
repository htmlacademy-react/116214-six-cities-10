import { Outlet, useLocation } from 'react-router-dom';
import * as constants from '../../constants';

function Layout(): JSX.Element {
  const currentPath = useLocation();
  const currentElementName = constants.ROUTES[currentPath.pathname];
  const pageClassName = constants.PAGE_CLASS_NAME[currentElementName];

  return (
    <div className={pageClassName}>
      <Outlet />
    </div>
  );
}

export default Layout;
