import React, { useState } from 'react';
import './App.css';

import NavBar from './components/navbar/NavBar';
import SearchBox from './components/searchbox/SearchBox';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <NavBar/>
      <div className="landing-page">
        <img src="/assests/image/girmanlogo.svg"/>
        <SearchBox/>
      </div> 
    </div>
  );
}

export default App;
