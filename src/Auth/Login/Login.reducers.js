import { loginActions  } from './Login.actions';

const initialState = {
  user: null,
  loading: false,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.LOGIN:
      return { ...state, loading: true };
    
    case loginActions.LOGIN_SUCCESS: 
      return { ...state, loading: false };

    case loginActions.LOGIN_FAILED: 
      return { ...state, loading: false, error: action.payload };

    case loginActions.FETCH_USER:
      return { ...state, loading: false, user: action.payload };

    case loginActions.LOGOUT:
      return { ...state, loading: true };
    
    case loginActions.LOGOUT_SUCCESS:
      return { ...state, loading: false, user: null };
    
    case loginActions.LOGOUT_FAILED:
      return { ...state, loading: false, error: action.payload };
      
    default:
      return state;
  }
}

export default loginReducer;