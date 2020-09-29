import { AnyAction, combineReducers } from '../../node_modules/redux';
import user from './user';
import video from './video';

const appReducer = combineReducers({
  user,
  video,
});

const rootReducer = (state: any, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
