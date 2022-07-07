/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Landing Page", time: 7.4 },
        { name: "Configurator", time: 0.2 },
        { name: "Check-out", time: 7.0 },
        { name: "Deal", time: 3.8 },
      ]
    }
  }

  render() {
    let totalSum = 0;
    let lefts = [];
    this.state.data.forEach((item, index) => {
      totalSum += item.time;
      let width = (item.time / totalSum) * 100;
      lefts.push(lefts[index - 1] != undefined ? (lefts[index - 1] + this.state.data[index - 1].time) : 0);
    });
    console.log(lefts);

    return (
      <div className="chart">
        {
          this.state.data.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="legend">{item.name}</div>
                <div className='line'>
                  <div className="tile" style={{ width: (item.time / totalSum) * 100 + '%', left: (lefts[index] / totalSum) * 100 + '%' }}>
                    <div className="tile_text">{item.time}</div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default App;
