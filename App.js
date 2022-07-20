import React from 'react';
import { About } from './pages/about';
import {Home} from './pages/home';
import { Tabelas } from './pages/tables';

function App() {
  return (
    <div className="App">
        <Home/>
        <Tabelas/>
        <About/>
    </div>
  );
}

export default App;
