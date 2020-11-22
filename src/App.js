import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import SigninAndSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			console.log('User Auth object', userAuth);

			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(userSnapShot => {
					setCurrentUser({ id: userSnapShot.id, ...userSnapShot.data() });
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		console.log('Unsubscribing from firebase-auth open subscription');
		this.unsubscribeFromAuth(); //close the open subscription to prevent memory leaks
	}

	render() {
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

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
