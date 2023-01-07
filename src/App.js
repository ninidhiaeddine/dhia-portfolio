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
import Ubuntu from './Fonts/Ubuntu/Ubuntu-Regular.ttf';

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
      fontFamily: 'Ubuntu, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Ubuntu';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Ubuntu'), local('Ubuntu-Regular'), url(${Ubuntu}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Grid container>
        <Grid item xs={1}>
          <BrowserRouter><SideBar /></BrowserRouter>
        </Grid>

        <Grid item xs={11}>
          <BrowserRouter><TopBar /></BrowserRouter>
          <RouterProvider router={router} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
