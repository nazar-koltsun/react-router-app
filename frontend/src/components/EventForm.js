import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();

  const isSubmiting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form className={classes.form} method={method}>
      {actionData && actionData.errors && (
        <ul>
          {Object.values(actionData.errors).map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          defaultValue={event?.title || ''}
          type="text"
          name="title"
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          defaultValue={event?.image || ''}
          type="url"
          name="image"
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          defaultValue={event?.date || ''}
          type="date"
          name="date"
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          defaultValue={event?.description || ''}
          date
          name="description"
          rows="5"
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmiting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmiting}>
          {isSubmiting ? 'isSubmiting' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export const action = async ({ params, request }) => {
  let formData = await request.formData();
  const eventId = params.id;
  const url = `http://localhost:8080/events/${eventId || ''}`;
  
  const eventData = {
    title: formData.get('title'),
    image: formData.get('image'),
    date: formData.get('date'),
    description: formData.get('description'),
  }

  const res = await fetch(url, {
    method: request.method,
    body: JSON.stringify(eventData),
    headers: {
      "Content-type": "application/json"
    }
  });

  if(res.status === 422) return res;
  
  if (!res.ok) throw json({message: 'Could not save event'}, {status: 500});

  return redirect('/events');
};

export default EventForm;
