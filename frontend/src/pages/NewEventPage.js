import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return (
    <>
      <EventForm method='post' />
      <h1>New Event Page</h1>
    </>
  )
}

export const action = async ({ params, request }) => {
  let formData = await request.formData();
  
  const eventData = {
    title: formData.get('title'),
    image: formData.get('image'),
    date: formData.get('date'),
    description: formData.get('description'),
  }

  const res = await fetch('http://localhost:8080/events', {
    method: 'post',
    body: JSON.stringify(eventData),
    headers: {
      "Content-type": "application/json"
    }
  });
  
  if(res.status === 422) return res;
  
  if (!res.ok) throw json({message: 'Could not save event'}, {status: 500});

  return redirect('/events');
};

export default NewEventPage;