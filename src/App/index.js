import React from 'react';
import './App.css';

import Links from './Links';
import Footer from './Footer';

function App() {
    const name = 'Mykola Grytsai';

    return (
        <div className="holder">
            <h1>{name}</h1>
            <Links />
            <Footer />
        </div>
    )
}

export default App;
