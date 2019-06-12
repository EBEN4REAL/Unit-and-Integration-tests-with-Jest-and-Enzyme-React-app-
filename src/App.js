import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Headline from './components/Headline';

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline />
      </section>
      
    </div>
    

  );
}

export default App;
