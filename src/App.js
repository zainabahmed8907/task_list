import './App.css';
import List from './List';

import data from './data';
import { useState } from 'react';
import Main from './TodoTasks/main';
import Birthdays from './Birthdays';


function App() {
  // const[people,setPeople]=useState(data)
 
  return (
    <div className="App">
    {/* <Birthdays/> */}
     <Main/>
    </div>
  );
}

export default App;
