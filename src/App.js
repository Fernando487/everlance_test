import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Users from './screens/Users';
import Details from './screens/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: '/users/:username',
    element: <Details />,
  }
])

function App() {
  return (
    <div className='container mx-auto pt-5'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
