import { AsyncStorage } from 'react-native';
import { AnyAction } from 'redux';

interface UserDuck {
  login: string | null;
  loadingLogin: boolean;
}

const INITIAL_STATE: UserDuck = {
  login: null,
  loadingLogin: false,
};

const INIT_LOGIN = 'user_init_login';
const LOGIN_USER = 'user_login_user';

export default (state = INITIAL_STATE, action: AnyAction): UserDuck => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, login: action.payload, loadingLogin: false };
    case INIT_LOGIN:
      return { ...state, loadingLogin: true };
    default:
      return state;
  }
};

export const submitLogin = ({
  login,
  callback,
}: {
  login: string;
  password: string;
  callback: () => void;
}) => {
  return async (dispatch: any) => {
    dispatch({ type: INIT_LOGIN });
    setTimeout(async function () {
      await AsyncStorage.setItem('login', login);
      dispatch({ type: LOGIN_USER, payload: login }, callback());
    }, 5000);
  };
};

export const autoLogin = ({
  login,
  callback,
}: {
  login: string;
  callback: () => void;
}) => {
  return async (dispatch: any) => {
    dispatch({ type: INIT_LOGIN });
    setTimeout(async function () {
      await AsyncStorage.setItem('login', login);
      dispatch({ type: LOGIN_USER, payload: login }, callback());
    }, 5000);
  };
};
