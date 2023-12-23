import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskApp from './TaskApp.jsx';
import 'bulma/css/bulma.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>,
);
