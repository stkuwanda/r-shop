import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menuitem.component';
import './directory.styles.scss';

const Directory = ({ sections }) => {
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...restOfSectionProps }) => (
				<MenuItem key={id} {...restOfSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
