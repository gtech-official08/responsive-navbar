import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
          <Navbar />
        </main>
      </Router>
    </>
  )
}

export default App
