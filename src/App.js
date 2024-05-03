import React, { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram"
import Header from "./components/Header/Header"


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    if (tg && typeof tg.ready === 'function') {
       tg.ready();
    }
   }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
