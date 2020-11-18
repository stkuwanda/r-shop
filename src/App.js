import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import SigninAndSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	constructor(){
		super();
		this.state = {currentUser: null};
	}

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			console.log(user);
			this.setState({currentUser: user});
		});
	}

	componentWillUnmount(){
		console.log('Unsubscribing from firebase-auth open subscription');
		this.unsubscribeFromAuth();//close the open subscription to prevent memory leaks
	}

	render(){
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SigninAndSignupPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
