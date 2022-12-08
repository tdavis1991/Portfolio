import './App.css';
import { Home, Projects, Contact, About, NavbarContainer } from './content';


function App() {

  return (
    <div className="App">
      <div className='App__navbar'>
        <NavbarContainer />
      </div>
      <div className='App__content'>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default App
