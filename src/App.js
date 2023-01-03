import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Art from './Pages/Art';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Art",
    element: <Art/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Education",
    element: <Education/>,
  },
  {
    path: "/Experience",
    element: <Experience/>,
  },
  {
    path: "/Projects",
    element: <Projects/>,
  },
  {
    path: "/Skills",
    element: <Skills/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
