import React from 'react';
import Layout from './pages/Layout';
import './styles/index.css';
import './styles/custom.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

library.add(fab,fas)

function App() {
  return (
    <div className="App">
      <Layout/>
      
    </div>
  );
}

export default App;
