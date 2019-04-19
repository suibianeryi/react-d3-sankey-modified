import React, { Component } from 'react';
import './App.css';
import BarChart from './components/d3container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
            <BarChart/>
        </section>
      </div>
    );
  }
}

export default App;
