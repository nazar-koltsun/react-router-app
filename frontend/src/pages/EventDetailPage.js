import { json, useRouteLoaderData, redirect } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('eventDetail');

  return (
    <EventItem event={data.event} />
  );
};

export default EventDetailPage;

export const eventDetailLoader = async ({params}) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);

  if (!response.ok) {
    throw json({message: 'Could not fetch event details'}, {status: 500});
  }
  else {
    return response;
  }
};

export const action = async ({ params, request }) => {
  const eventId = params.id;

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
    headers: {
      "Content-type": "application/json"
    }
  });

  if (!response.ok) {
    throw json({message: 'Could not delete event'}, {status: 500});
  }
  else {
    return redirect('/events');
  }
};
