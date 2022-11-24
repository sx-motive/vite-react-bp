import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <ul className='menu'>
      <li className='menu__item'>
        <Link to='/' className='menu__item__link'>
          Home
        </Link>
      </li>
      <li className='menu__item'>
        <Link to='/about' className='menu__item__link'>
          About
        </Link>
      </li>
    </ul>
  );
}
