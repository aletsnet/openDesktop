import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { useSelector,  } from 'react-redux';
import { setSessionData } from './redux/SessionActions';


//components
import Menu from './components/Menu';
import Home from './view/Home';
import Login from './view/Login';
import Categoria from './view/System/Categoria';
import Configuracion from './view/System/Configuracion';

export default function App() {
	const session = useSelector(setSessionData);

	console.log(session.id);
	

	return (
		<Router>
			<Menu />
			{ 
			session.id === null ? 
				<Login />
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
