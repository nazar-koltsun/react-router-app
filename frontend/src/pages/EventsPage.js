import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();

  if (data.isError) return <p>{data.message}</p>;

  const { events: fetchedEvents } = data;

  return <EventsList events={fetchedEvents} />;
};

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({message: 'Could not fetch events'}, {status: 500})
  }
  else {
    return response;
  }
};
