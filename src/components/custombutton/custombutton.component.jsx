import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({ children, ...restOfProps }) => {
	return (
		<button className='custom-button' {...restOfProps}>
			{children}
		</button>
	);
};

export default CustomButton;
