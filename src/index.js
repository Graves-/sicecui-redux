import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './Auth/Login/Login.reducers';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';

const middlewares = [thunk];
if(process.env.NODE_ENV === 'development'){
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#2979ff'
    }
  },
});

const rootReducer = combineReducers({
  login: loginReducer
});

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

ReactDOM.render(<Provider store={store}><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
