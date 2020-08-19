import React from 'react';
import './App.css';
import PersonData from '../src/components/PersonData';


let personProps = {
  first_name: 'alex',
  last_name: 'p',
  age: 27,
  agreetoterms: true
};


function App() {
  return (
    <div className="App">
      <header className="App-header">

          <PersonData {...personProps} />

      </header>
    </div>
  );
}

export default App;
