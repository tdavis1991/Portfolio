import './App.css';
import { Home, Projects, Contact, About, Navbar } from './content';

import ColorSchemesExample from './content/navbar/Navbar';


function App() {

  return (
    <div className="App">
      <div className='App__navbar'>
        {/* <Navbar /> */}
        <ColorSchemesExample />
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default App
