import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import MobileMenu from './components/layout/MobileMenu';
import RestoreScroll from './components/RestoreScroll';
import Router from './components/Router';

export default function Layout() {
  return (
    <div className='layout'>
      <BrowserRouter>
        <Header />
        <Router />
        <MobileMenu />
        <RestoreScroll />
      </BrowserRouter>
    </div>
  );
}
