import logo from './logo.jpg';
import './App.css';
import './generator.js';
import generator from './generator.js';

function App() {
  return (
    <div className="App center">
      <header className="App-header center">
        <h1 className="f1 lh-copy">Chuck Norris Facts</h1>
        <img src={logo} alt="logo" />
        <p className="f4">
          Pick your random Chuck Norris Fact!
        </p>
        <button onClick={generator}>Generate fact!</button>
        <p className='randomFactContainer f4 center pa4 bg-light-gray'></p>
      </header>
    </div>
  );
}

export default App;
