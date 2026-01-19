import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Register from "./pages/projects/Register"
import ProjectList from "./pages/projects/ProjectList"
import ProjectDetail from "./pages/projects/ProjectDetail"
import Layout from "./components/layout/Layout"
import "./App.css"

function App() {

  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects">
            <Route index element={<ProjectList />} />
            <Route path="register" element={<Register />} />
            <Route path=":id" element={<ProjectDetail />} />
          </Route>
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
