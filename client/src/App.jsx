import { BrowserRouter, Routes, Route } from "react-router-dom"

const Test = () => {
  return <div>Test</div>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
