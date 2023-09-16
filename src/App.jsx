import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Git from './components/Git'
import Home from './components/Home'
import { NavbarSimple } from './components/NavbarSimple'
import Projects from './components/Projects'
import Skill from './components/Skills'

const App = () => {
  return (
    <>
      <NavbarSimple />
      <Home />
      <About/>
      <Skill/>
      <Projects/>
      <Git/>
      <Contact/>
    </>
  )
}

export default App
