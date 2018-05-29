import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchCheesesFromApi } from './actions'

class App extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <button onClick={() => this.props.dispatch(fetchCheesesFromApi())}>Get me Data!</button>
            </div>
        );
    }
}

export default connect()(App);
