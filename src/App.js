import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
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
import React from 'react';
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Art",
    element: <Art />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Education",
    element: <Education />,
  },
  {
    path: "/Experience",
    element: <Experience />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Skills",
    element: <Skills />,
  },
]);

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#212022',
    },
    primary: {
      main: '#7C4DFF',
    },
    typography: {
      fontFamily: ['Ubuntu'],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>

      <BrowserRouter><TopBar /></BrowserRouter>

      <Grid container>
        <Grid item xs={1}>
          <BrowserRouter><SideBar /></BrowserRouter>
        </Grid>

        <Grid item xs={11}>
          <RouterProvider router={router} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
