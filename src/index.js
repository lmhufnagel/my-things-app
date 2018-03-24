import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
