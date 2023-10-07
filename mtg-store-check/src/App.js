import './App.css';
import {useState} from 'react'
import Hero from './components/hero/hero';
import SubmissionForm from './components/submissionForm/submissionForm';

function App() {
  return (
    <div className="App">
<Hero></Hero>
      <SubmissionForm></SubmissionForm>
    </div>
  );
}

export default App;
