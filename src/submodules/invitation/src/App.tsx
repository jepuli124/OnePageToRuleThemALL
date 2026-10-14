
import { useState } from 'react'
import './App.css'
import './Font.css'
import './css/button.css'
import './css/inputfield.css'
import './index.css'
import './css/card.css'
import './css/darkNight.css'
import Archive from './components/Archive'
import { getFromStore } from './hooks/StorageHook'
import musicPlayer from './hooks/MusicHook'
import CurrentEvent from './components/CurrentEvent'
import Lock from '/images/Lock.png'


function App() {

  const [showArchive, setShowArchive] = useState<boolean>(false)
  const [lockArchive, setLockArchive] = useState<boolean>(false)
  return (
    <>
      
      <CurrentEvent></CurrentEvent>
    
      <section style={{marginTop: "15vh", padding: "5vh"}}>
        <button onClick={() => {
            const key = getFromStore("ArchiveKey")
            if(key === "Access"){
              setShowArchive(old => !old)
            } else {
              setLockArchive(true)
              musicPlayer.playSFX("Locked-CaptainYulef.mp3")
            }
            
          }
        }>
          {lockArchive? 
            <>
              <img src={Lock} alt="" style={{height: "100px"}} onClick={() => {
                musicPlayer.playSFX("Locked-CaptainYulef.mp3")
                }}/>
            </>
          :
            <>Show/Hide Archive</>
          }
          
          
          </button>
        {showArchive? <Archive /> : <></>}
      </section>
      
    </>
  )
}

export default App


