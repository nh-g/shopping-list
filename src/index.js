import React from 'react';
import ReactDOM from 'react-dom';
import { ListProvider } from "./state/ListProvider";
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
