import React from 'react';
// import PropTypes from 'prop-types';


export default function Menu() {
	return (
        <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div className="container-fluid">
                <div  className="navbar-header">
                    <button type="button"  className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse" >
                        <span  className="sr-only">Toggle navigation</span>
                        <span  className="icon-bar"></span>
                        <span  className="icon-bar"></span>
                        <span  className="icon-bar"></span>
                    </button>
                    <a  className="navbar-brand" href="#"><span>open</span>Desktop</a>
                </div>
            </div>
        </nav>
    );
}