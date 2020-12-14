import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../carticon/carticon.component';
import CartDropdown from '../cartdropdown/cartdropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser, isCartHidden }) => {
	console.log('Header Component', currentUser);

	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					Shop
				</Link>
				<Link className='option' to='/contact'>
					Contact
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						Sign Out
					</div>
				) : (
					<Link className='option' to='/signin'>
						Sign In{' '}
					</Link>
				)}
				<CartIcon />
			</div>
			{isCartHidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	isCartHidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
