import React from 'react';
import Navigation from './Component/Navigation.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './Redux/Reducer/index.reducer';

var middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
