import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import {AnimatePresence} from "framer-motion"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Register from "./pages/projects/Register"
import ProjectList from "./pages/projects/ProjectList"
import ProjectDetail from "./pages/projects/ProjectDetail"
import Recruit from "./pages/recruit/Recruit"
import Community from "./pages/community/Community"
import CommunityWrite from "./pages/community/CommunityWrite"
import CommunityDetail from "./pages/community/CommunityDetail"
import MyPage from "./pages/MyPage"
import ProfileEdit from "./pages/ProfileEdit"
import UserProfile from "./pages/UserProfile"
import Layout from "./components/layout/Layout"
import AdminLayout from "./components/layout/AdminLayout"
import AdminDashboard from "./pages/admin/AdminDashboard"
import UserManagement from "./pages/admin/UserManagement"
import ProjectManagement from "./pages/admin/ProjectManagement"
import ProtectedRoute from "./components/common/ProtectedRoute"
import PageTransition from "./components/common/PageTransition"
import ScrollToTop from "./components/common/ScrollToTop"
import {AppProvider, useApp} from "./contexts/AppContext"
import {AdminProvider} from "./contexts/AdminContext"
import {lightTheme, darkTheme} from "./styles/theme"
import {GlobalStyle} from "./styles/GlobalStyle"
import "./App.css"

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home/></PageTransition>}/>
                <Route path="/login" element={<PageTransition><Login/></PageTransition>}/>
                <Route path="/signup" element={<PageTransition><Signup/></PageTransition>}/>
                <Route path="/projects">
                    <Route index element={<PageTransition><ProjectList/></PageTransition>}/>
                    <Route path="register" element={<PageTransition><Register/></PageTransition>}/>
                    <Route path=":id" element={<PageTransition><ProjectDetail/></PageTransition>}/>
                </Route>
                <Route path="/recruit" element={<PageTransition><Recruit/></PageTransition>}/>
                <Route path="/community">
                    <Route path="/community" element={<PageTransition><Community/></PageTransition>}/>
                    <Route path="/community/write" element={<PageTransition><CommunityWrite/></PageTransition>}/>
                    <Route path="/community/:id" element={<PageTransition><CommunityDetail/></PageTransition>}/>
                </Route>
                <Route path="/mypage">
                    <Route index element={<PageTransition><MyPage/></PageTransition>}/>
                    <Route path="edit" element={<PageTransition><ProfileEdit/></PageTransition>}/>
                </Route>
                <Route path="/user/:username" element={<PageTransition><UserProfile/></PageTransition>}/>
            </Routes>
        </AnimatePresence>
    );
}

function AdminRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedRoute requiredRole="admin" />}>
                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
                    <Route path="/admin/users" element={<PageTransition><UserManagement /></PageTransition>} />
                    <Route path="/admin/projects" element={<PageTransition><ProjectManagement /></PageTransition>} />
                </Route>
            </Route>
        </Routes>
    );
}

function ThemedApp() {
    const {isDarkMode} = useApp();
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <ScrollToTop/>
            <AdminProvider>
                {isAdminRoute ? (
                    <AdminRoutes />
                ) : (
                    <Layout>
                        <AnimatedRoutes/>
                    </Layout>
                )}
            </AdminProvider>
        </ThemeProvider>
    );
}

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <ThemedApp/>
            </BrowserRouter>
        </AppProvider>
    )
}

export default App
