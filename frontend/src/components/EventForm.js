import { Form, useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form className={classes.form} method={method}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" defaultValue={event?.title || ''} type="text" name="title" required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" defaultValue={event?.image || ''} type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" defaultValue={event?.date || ''} type="date" name="date" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" defaultValue={event?.description || ''} date name="description" rows="5" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type='submit'>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
