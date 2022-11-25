import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
       <Toaster />
    </div>
  );
}

export default App;

// echo "# b612-used-products-resale-clients-side-jayed-phero" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/programming-hero-web-course-4/b612-used-products-resale-clients-side-jayed-phero.git
// git push -u origin main
