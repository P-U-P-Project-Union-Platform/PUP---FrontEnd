import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/projects/Register"
import Layout from "./components/layout/Layout"
import "./App.css"
import Projects from "./pages/projects/Projects"

function App() {

  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects">
            <Route index element={<Projects />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
