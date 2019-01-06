import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

import Layout from './page/layout/Layout.js'
import Home from './component/home/Home'
import Hot from './component/hot/Hot'
import TimeLine from './component/timeline/TimeLine'
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route  path='/' render={props => (
                        <Layout>
                            <Switch>
                                <Route exact path='/' component={Home}></Route>
                                <Route path='/hot' component={Hot}></Route>
                                <Route path='/timeline' component={TimeLine}></Route>
                            </Switch>
                        </Layout>
                    )}></Route>
                </Switch>
            </Router>
        )
    }
}

export default App;