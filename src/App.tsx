import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './submodules/index/src/App'
import Invitation from './submodules/invitation/src/App'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index></Index>} />
          <Route path="/invitation" element={<Invitation></Invitation>} />
          <Route path="/projects" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
