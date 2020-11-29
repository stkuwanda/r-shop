import { createSelector } from 'reselect';

//input-selector non-memoized
const selectUser = state => state.user;

//output-selector memoized
export const selectCurrentUser = createSelector(
	[selectUser],
	user => user.currentUser
);
