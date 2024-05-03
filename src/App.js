import React, { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram"


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
   }, []);

const onClose = () => {
  tg.close()
}


  return (
    <div className="App">
      work
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
