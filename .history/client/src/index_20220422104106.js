import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { createStore} from 'redux';
import { Provider } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension'

//store
const store = createStore(rootReduce, composeWithDevTools());


ReactDOM.render(
  
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider> ,
  
  document.getElementById('root')
);


reportWebVitals();
