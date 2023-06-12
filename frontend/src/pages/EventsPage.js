import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
  const { events: fetchedEvents } = useLoaderData();

  return <EventsList events={fetchedEvents} />;
};

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) throw new Error('Fetching events failed.');

  return response;
};
