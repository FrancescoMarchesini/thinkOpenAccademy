/* global document */

import React from "react";
import { render } from "react-dom";
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import "./polyfills.js";
import Routes from './routes'

render(
    <Routes />, document.getElementById('app')
);