import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './pages/Layout';
import Repositories from './components/layout/Repositories';
import Stars from './components/layout/Stars';
import Followers from './components/layout/Followers'
import Following from './components/layout/Following'






ReactDOM.render(
    <Router>
        <Switch>
                <Route exact path="/" component={App} />>
                <Route exact path="/user/:username" render={props => <Layout {...props}/>}/>
                <Route path="/user/:username/Repositories" render={props => <Repositories {...props}/>} />
                <Route path="/user/:username/Stars" render={props => <Stars {...props}/>}/>
                <Route path="/user/:username/Followers" render={props => <Followers {...props}/>} />
                <Route path="/user/:username/Following"  render={props => <Following {...props} />} />
          
        </Switch>
        {/* <App /> */}
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
