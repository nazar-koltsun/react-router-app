import EventNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router-dom';

const EventsLayout = () => {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
};

export default EventsLayout;
