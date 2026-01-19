import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Register from "./pages/projects/Register"
import ProjectList from "./pages/projects/ProjectList"
import ProjectDetail from "./pages/projects/ProjectDetail"
import Recruit from "./pages/Recruit"
import RecruitWrite from "./pages/RecruitWrite"
import Community from "./pages/Community"
import CommunityDetail from "./pages/CommunityDetail"
import MyPage from "./pages/MyPage"
import ProfileEdit from "./pages/ProfileEdit"
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
          <Route path="/recruit">
            <Route index element={<Recruit />} />
            <Route path="write" element={<RecruitWrite />} />
          </Route>
          <Route path="/community">
            <Route index element={<Community />} />
            <Route path=":id" element={<CommunityDetail />} />
          </Route>
          <Route path="/mypage">
            <Route index element={<MyPage />} />
            <Route path="edit" element={<ProfileEdit />} />
          </Route>
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
