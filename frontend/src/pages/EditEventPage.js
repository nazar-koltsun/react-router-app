import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const { event } = useRouteLoaderData('eventDetail');
  console.log('event', event);

  return (
    <>
      <h1>Edit Event Page</h1>
      <EventForm event={event} />
    </>
  );
};

export default EditEventPage;
