import { Outlet } from 'react-router-dom';

import Nav from '../../Sharable/Nav/Nav';
import Footer from '../../Sharable/Footer/Footer';
import './../../index.css';

const Main = () => {

  return (
    <div>
      <div className="mx-auto">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
