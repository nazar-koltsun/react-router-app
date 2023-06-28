import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const { event } = useRouteLoaderData('eventDetail');

  return (
    <>
      <h1>Edit Event Page</h1>
      <EventForm event={event} method='PATCH' />
    </>
  );
};

export default EditEventPage;
