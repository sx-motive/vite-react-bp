import Menu from './Menu';
import { useMenuStore } from '../../store';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MobileMenu() {
  const menuState = useMenuStore((state) => state.init);
  const closeMenu = useMenuStore((state) => state.closeMenu);
  const { pathname } = useLocation();

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div className={`menu__mobile ${menuState ? 'open' : 'close'}`}>
      <Menu />
    </div>
  );
}
