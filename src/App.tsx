import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './submodules/jepuli124.github.io/src/App'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index></Index>} />
          <Route path="/about" element={<></>} />
          <Route path="/projects" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
