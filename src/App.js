import logo from './logo.svg';
import './App.css';
import Aside from './component/Aside';
import Player from './component/Player';
import { useState } from 'react';
function App() {
  const [standard, setStandard] = useState('');

  return (
    <>
    <div className = "page">
      <Aside setStandard = {setStandard}></Aside>
      <Player standard = {standard}></Player>
    </div>
    </>
  );
}

export default App;
