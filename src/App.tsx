import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<></>} />
          <Route path="/projects" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
