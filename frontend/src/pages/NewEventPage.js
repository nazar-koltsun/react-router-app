import EventForm from "../components/EventForm";
import { useFetchers } from "react-router-dom";

const NewEventPage = () => {

  return (
    <>
      <h1>New Event Page</h1>
      <EventForm method='post' />
    </>
  )
}

export default NewEventPage;