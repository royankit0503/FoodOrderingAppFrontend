import React, { Component } from 'react';
import Home from './home/Home';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Controller extends Component {

    constructor() {
        super();
        this.baseUrl = 'https://api.instagram.com/v1/';
    }

    render() {
        return (
            <Router>
                <div className='main-container'>

                    {/* Referencing and routing to login page */}
                    <Route exact path='/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />

                </div>
            </Router>
        )
    }
}

export default Controller;
