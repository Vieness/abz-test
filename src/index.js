import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {CssBaseline, ThemeProvider} from "@mui/material";
import store from "./app/store";
import theme from "./app/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
