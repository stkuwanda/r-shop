import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({ children, isGoogleSignin, ...restOfProps }) => {
	return (
		<button className={`${isGoogleSignin ? 'google-signin': ''} custom-button`} {...restOfProps}>
			{children}
		</button>
	);
};

export default CustomButton;
