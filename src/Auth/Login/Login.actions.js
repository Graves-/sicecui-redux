import { firebaseAuth, googleAuthProvider } from '../../firebase';

export const loginActions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  FETCH_USER: 'FETCH_USER',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILED: 'LOGOUT_FAILED', 
};

export const login = () => dispatch => {
  dispatch({
    type: loginActions.LOGIN
  });

  firebaseAuth.signInWithPopup(googleAuthProvider).then(user => {
    localStorage.setItem('_a', JSON.stringify(user));
    dispatch({
      type: loginActions.LOGIN_SUCCESS,
    });
  }).catch(error => {
    dispatch({
      type: loginActions.LOGIN_FAILED,
      payload: error
    });
  })
};

export const logout = () => dispatch => {
  dispatch({
    type: loginActions.LOGOUT
  });

  firebaseAuth.signOut().then(() => {
    localStorage.removeItem('_a');
    dispatch({
      type: loginActions.LOGOUT_SUCCESS
    });
  }).catch(error => {
    dispatch({
      type: loginActions.LOGOUT_FAILED,
      payload: error
    });
  });
};

export const fetchUser = () => dispatch => {
  firebaseAuth.onAuthStateChanged( user => {
    if(user){
      dispatch({
        type: loginActions.FETCH_USER,
        payload: user
      });
    }else{
      dispatch({
        type: loginActions.FETCH_USER,
        payload: null
      });
    }
  })
}