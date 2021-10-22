//React imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//MUI imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkScrollbar from '@mui/material/darkScrollbar';

const dark = createTheme({

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar()
      },
    },
  },

  palette: {
    primary: {
      main: "#F0572F",
      contrastText: "#0F0F0F"
    },
    secondary: {
      main: "#F6BA1E",
    },
    text:{
      primary: "#0F0F0F",
      light: "#F3F3F3"
    },
    background:{
      default: "#0F0F0F",
      light: "#2f2f2f"
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,

  },

})


ReactDOM.render(
  <ThemeProvider theme={dark}>
    <CssBaseline/>
    <App/>
  </ThemeProvider>,
  
  document.getElementById('root')
);