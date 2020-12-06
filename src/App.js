import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import SigninAndSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import CollectionPage from './pages/collection/collection.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
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
		const { currentUser } = this.props;
		console.log(currentUser);
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route path='/shop/:collectionId' component={CollectionPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							currentUser ? <Redirect to='/' /> : <SigninAndSignupPage />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);