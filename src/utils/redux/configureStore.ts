import reducer from '@ducks/index';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

export default function configureStore(initialState: any = {}) {
  const store = createStore(reducer, initialState, applyMiddleware(ReduxThunk));

  return store;
}
