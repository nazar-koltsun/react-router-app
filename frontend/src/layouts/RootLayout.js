import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import classes from './RootLayout.module.css';

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div className={classes.content}>
      <MainNavigation />
      {navigation.state === 'loading' && <p>Loading...</p>}
      {navigation.state !== 'loading' && <Outlet />}
    </div>
  );
};

export default RootLayout;
