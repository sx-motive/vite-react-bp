import { Link } from 'react-router-dom';
import { useMenuStore } from '../../store';
import Menu from './Menu';

export default function Header() {
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        Denis Kunitsyn
      </Link>
      <Menu />
      <button onClick={toggleMenu}>menu</button>
    </header>
  );
}
