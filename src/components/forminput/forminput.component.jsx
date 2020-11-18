import React from 'react';
import './forminput.styles.scss';

const FormInput = ({ label, ...restOfProps }) => {
	return (
		<div className='group'>
			<input className='form-input' {...restOfProps} />
			{label ? (
				<label
					className={`${
						restOfProps.value.length ? 'shrink' : ''
					} form-input-label`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
