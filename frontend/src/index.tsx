import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { StateProvider } from './state/state';
import { reducer } from './state/reducer';

ReactDOM.render(
  <StateProvider reducer={reducer}>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById('root')
);
