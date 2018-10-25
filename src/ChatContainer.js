import React from 'react'
import { Route,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './Login';

export default function ChatContainer() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Route path="/" component={Login} />
      </BrowserRouter>
    </Provider>
  )
}

