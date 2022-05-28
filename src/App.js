import React from 'react';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom'



export default function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  )
}