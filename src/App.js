import logo from './wordle_logo_192x192.png';
import words from './words.json';
import './App.css';

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function App() {
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
      a = s % La.length;
      return La[a];
  }

  const today = new Date;
  const solutionMinusThree = Da(today.addDays(-3));
  const solutionMinusTwo = Da(today.addDays(-2));
  const solutionMinusOne = Da(today.addDays(-1));
  const solution = Da(today);
  const solutionPlusOne = Da(today.addDays(1));
  const solutionPlusTwo = Da(today.addDays(2));
  const solutionPlusThree = Da(today.addDays(3));

  console.log('The today', today)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="solutions">
          <h4>+3 {solutionPlusThree}</h4>
          <h3>+2 {solutionPlusTwo}</h3>
          <h2>+1 {solutionPlusOne}</h2>
          <h1 className="solution">{solution}</h1>
          <h2>-1 {solutionMinusOne}</h2>
          <h3>-2 {solutionMinusTwo}</h3>
          <h4>-3 {solutionMinusThree}</h4>
        </div>
      </header>
    </div>
  );
}

export default App;
