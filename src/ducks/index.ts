import { AnyAction, combineReducers } from '../../node_modules/redux';
import user from './user';
import video from './video';

export const USER_LOGOUT = 'USER_LOGOUT';

const appReducer = combineReducers({
  user,
  video,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
