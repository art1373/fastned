import {createSelector} from 'reselect';

export const userIdSelector = createSelector(
  (state: any) => state.user.email,
  email => email,
);
