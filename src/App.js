import HomePage from './pages/homepage/homepage.component';
import SigninAndSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import './App.css';

function App() {
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

export default App;
