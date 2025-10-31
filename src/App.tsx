import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import Login from "./pages/Login"
import Register from "./pages/projects/register"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects">
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
