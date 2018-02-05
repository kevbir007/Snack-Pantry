import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from "./router";
import { connect } from 'react-redux';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}
