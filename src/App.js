import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='bg-teal-50'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
