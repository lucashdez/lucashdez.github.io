import './App.css';
import { useState } from 'react'

function App() {
  const [subs, setSubs] = useState([{
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.aqweq.wcom',
    description: 'Dapelu'
  }]);


  return (
  <div className='App'>
    <h1>midu subs</h1>
      <ul>{subs.map(sub => {
        return(
        <li key={sub.nick}></li>
        )
      })}</ul>
  </div>
  )
}

export default App;
