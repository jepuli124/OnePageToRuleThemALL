
import './index.css'
import './App.css'
import './css/Font.css'
import './css/button.css'
import './css/inputfield.css'
import './css/ZigZagGrid.css'
import CursorPulse from './components/CursorPulse'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Archive from './components/Archive'
import WebsitePortFolio from './components/WebsitePortFolio'
import Contact from './components/Contact'
import { useCallback, useEffect } from 'react'
import musicPlayer from './hooks/MusicHook'




function App() {
  //const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    musicPlayer.playSFX("waterDrop.mp3", 0.3)
  }, [])

  useEffect(() => {
      window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    }
  }, [])

  return (
    <>

    <div className='content' id='top'>

      <Navbar />

      
      <section id="center">
        <div>
          
        
        
        <main>
          <Hero />
          <About />
          <WebsitePortFolio></WebsitePortFolio>
        </main>

        </div>

      </section>


      <Contact></Contact>

      <section id="spacer"></section>
      
        <Archive></Archive>
      
      <section id="spacer"></section>
    </div>
      <CursorPulse />
    </>
  )
}

export default App
