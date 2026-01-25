import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Register from "./pages/projects/Register"
import ProjectList from "./pages/projects/ProjectList"
import ProjectDetail from "./pages/projects/ProjectDetail"
import RecruitWrite from "./pages/RecruitWrite"
import Community from "./pages/Community"
import CommunityWrite from "./pages/CommunityWrite"
import CommunityDetail from "./pages/CommunityDetail"
import MyPage from "./pages/MyPage"
import ProfileEdit from "./pages/ProfileEdit"
import Layout from "./components/layout/Layout"
import { AppProvider, useApp } from "./contexts/AppContext"
import { lightTheme, darkTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import "./App.css"

function ThemedApp() {
  const { isDarkMode } = useApp();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
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
            <Route path="/recruit" element={<RecruitWrite />} />
            <Route path="/community">
              <Route index element={<Community />} />
              <Route path="write" element={<CommunityWrite />} />
              <Route path=":id" element={<CommunityDetail />} />
            </Route>
            <Route path="/mypage">
              <Route index element={<MyPage />} />
              <Route path="edit" element={<ProfileEdit />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function App() {
  return (
    <AppProvider>
      <ThemedApp />
    </AppProvider>
  )
}

export default App
