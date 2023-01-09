import {
  RouterProvider,
  HashRouter,
  createHashRouter,
} from "react-router-dom";
import Home from './Pages/Home';
import Art from './Pages/Art';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
import ErrorPage from './Pages/ErrorPage';
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const router = createHashRouter([
  {
    path: "Art",
    element: <Art />,
    errorElement: <ErrorPage />
  },
  {
    path: "Contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
  {
    path: "Education",
    element: <Education />,
    errorElement: <ErrorPage />
  },
  {
    path: "Experience",
    element: <Experience />,
    errorElement: <ErrorPage />
  },
  {
    path: "Projects",
    element: <Projects />,
    errorElement: <ErrorPage />
  },
  {
    path: "Skills",
    element: <Skills />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
]);

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#212022',
      paper: '#241E29'
    },
    primary: {
      main: '#7C4DFF',
    },
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"].join(','),
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container direction={{xs: 'column-reverse', md: 'row'}}>
        <Grid item xs={12} md={1} className="relative">
          <HashRouter><SideBar /></HashRouter>
        </Grid>

        <Grid item xs={12} md={11}>
          <HashRouter><TopBar /></HashRouter>
          <RouterProvider router={router} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
