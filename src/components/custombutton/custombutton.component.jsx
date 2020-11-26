import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({
	children,
	isGoogleSignin,
	isInverted,
	...restOfProps
}) => {
	return (
		<button
			className={`${isInverted ? 'inverted' : ''} ${
				isGoogleSignin ? 'google-signin' : ''
			} custom-button`}
			{...restOfProps}>
			{children}
		</button>
	);
};

export default CustomButton;
