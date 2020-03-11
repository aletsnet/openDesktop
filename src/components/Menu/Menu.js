import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../../view/Home';
// import PropTypes from 'prop-types';


export default function Menu() {
	return (
        <Router>
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div  className="navbar-header">
                        <button type="button"  className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse" >
                            <span  className="sr-only">Toggle navigation</span>
                            <span  className="icon-bar"></span>
                            <span  className="icon-bar"></span>
                            <span  className="icon-bar"></span>
                        </button>
                        <Link  className="navbar-brand" href="#"><span>open</span>Desktop</Link>
                    </div>
                </div>
            </nav>
            <Route path="/" exact component={Home} />
        </Router>
    );
}