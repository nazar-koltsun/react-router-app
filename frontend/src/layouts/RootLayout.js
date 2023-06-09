import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import classes from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={classes.content}>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
