

import Header from './header/Header'
import Footer from './footer/Footer'
import MainContent from './maincontent/MainContent'
import {useState} from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent darkMode={darkMode} />
        <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;

