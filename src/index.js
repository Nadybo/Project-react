import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import App from './App.js'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );
