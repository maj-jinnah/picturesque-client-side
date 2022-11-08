import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './route/routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
