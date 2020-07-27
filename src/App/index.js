import React from 'react';
import './App.css';

import Links from './Links';

function App() {
  return (
      <div>
          <h1>Mykola Grytsai</h1>
          <Links />
          <div className="email">
              <a href="mailto:hello@grymyk.com">hello@grymyk.com</a>
          </div>
      </div>
  )
}

export default App;
