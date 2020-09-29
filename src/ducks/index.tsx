import { AnyAction, combineReducers } from '../../node_modules/redux';
import user from './user';

const appReducer = combineReducers({
  user,
});

const rootReducer = (state: any, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
