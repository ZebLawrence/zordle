
import React, { Component } from 'react';
import logo from './wordle_logo_192x192.png';
import words from './words.json';
import './solutions.scss';
import './App.css';

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayIndex: 0
    };
    this.changeDay = this.changeDay.bind(this);
  }

  changeDay(direction) {
    const { dayIndex } = this.state;

    let newIndex = dayIndex + direction;

    if (newIndex < -209) {
      newIndex = 365;
    } else if (newIndex > 365) {
      newIndex = -209;
    }

    this.setState({ dayIndex: newIndex });
  }

  render() {
    const { dayIndex } = this.state;
    const { La } = words;
    const Ha = new Date(2021,5,19,0,0,0,0);
    function Na(e, a) {
        const s = new Date(e);
        const t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5);
    }
  
    function Ga(e) {
        return Na(Ha, e);
    }
  
    function Da(e) {
        let a;
        const s = Ga(e);
        a = (s % La.length) + 2;
        return La[a];
    }
  
    const allDays = [];
    const today = new Date;
  
    for (let index = -209; index < 365; index++) {
      allDays.push({
        index,
        solution: Da(today.addDays(index))
      });
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="all-solutions">
            {allDays.map(day => {
              const { index, solution } = day;
              const className = `solution solution-${index - dayIndex}`;
              return (
                <div key={solution} className={className}>{`${index > 0 ? '+' : ''} ${index !== 0 ? index : ''} ${solution}`}</div>
              );
            })}
            <button onClick={() => this.changeDay(-1)} className="up" title="previous day" />
            <button onClick={() => this.changeDay(1)} className="down" title="next day" />                
          </div>        
        </header>
      </div>
    );
  }
}

export default App;
