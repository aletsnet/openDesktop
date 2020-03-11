import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { useSelector,  } from 'react-redux';
import { setSessionData } from './redux/SessionActions';
import dataBase from './database/connect';

//components
// import Menu from './components/Menu';
import Home from './view/Home';
import Login from './view/Login';
import Categoria from './view/System/Categoria';
import Configuracion from './view/System/Configuracion';

export default function App() {
	const session = useSelector(setSessionData);
	const setSession = session.sessionData.Session

	// console.log("id: ", dataBase);
	dataBase.comprobar();
	
	return (
		<Router>
			<nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div  className="navbar-header">
                        <button type="button"  className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse" >
                            <span  className="sr-only">Boton</span>
                            <span  className="icon-bar"></span>
                            <span  className="icon-bar"></span>
                            <span  className="icon-bar"></span>
                        </button>
                        <Link  className="navbar-brand" to="/"><span>open</span>Desktop</Link>
                    </div>
                </div>
            </nav>

			{ 
			setSession.id === null ? 
				<Route path="/" component={Login} />
			:
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/categoria">
						<Categoria />
					</Route>
					<Route path="/configuracion">
						<Configuracion />
					</Route>
				</Switch>
			}
		</Router>
	);
}
