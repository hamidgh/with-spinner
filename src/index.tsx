import React, {Suspense} from 'react';
import './index.scss'
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import withSpinner from './components/withSpinner/withSpinner';

const AppWithSpinner = withSpinner(App);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="loading">
        <AppWithSpinner />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
