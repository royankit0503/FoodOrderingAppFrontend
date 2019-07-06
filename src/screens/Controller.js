import React, { Component } from 'react';
import Home from './home/Home';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Controller extends Component {

    constructor() {
        super();
        this.baseUrl = 'http://localhost:8080/api/';
    }

    render() {
        return (
            <Router>
                <div className='main-container'>

                    {/* route to home page */}
                    <Route exact path='/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
                </div>
            </Router>
        )
    }
}

export default Controller;
