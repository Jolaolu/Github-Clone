import React from 'react';
import Layout from './pages/Layout';
import './styles/index.css';
import './styles/custom.css';

import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
