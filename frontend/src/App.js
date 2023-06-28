import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import EventsLayout from './layouts/EventsLayout';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage, {
  eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import{
  action as eventAction,
} from './components/EventForm';

import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/ErrorPage';

import { eventsLoader } from './pages/EventsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            id: 'eventDetail',
            path: ':id',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                action: deleteEventAction,
                element: <EventDetailPage />,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: eventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: eventAction,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
