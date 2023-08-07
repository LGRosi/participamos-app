import * as tokenService from "./services/token.services.js";
import "./App.scss";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import IdeaChannelsPage from "./pages/IdeaChannelsPage";
import SupportGroupsPage from "./pages/SupportGroupsPage/SupportGroupsPage";
import profileImage from "./assets/images/profile.png";
import Header from "./components/Header";
import ForumPage from "./pages/ForumPage";
import LoginPage from "./pages/LoginPage";
import AddSupportGroupsPage from "./pages/SupportGroupsPage/AddSupportGroupsPage";
import DetailSupportGroupsPage from "./pages/SupportGroupsPage/DetailSupportGroupsPage";
import { FcConferenceCall, FcHome, FcIdea } from "react-icons/fc";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuItem } from "./interfaces/sideBarMenu.interfaces";
import { Suspense, useEffect, useState } from "react";
import { CardProfile } from "./interfaces/cardProfile.interfaces";

function PrivateRoute({ isAuthenticated, element, ...props }: any) {
    return isAuthenticated ? element : <Navigate to={'/login'} />;
}

function App() {

    const navigate = useNavigate();
    const [user, setUser] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = tokenService.getToken();
        if (token) {
            setIsAuthenticated(true);
        }
    }, [])

    useEffect(() => {
        if(isAuthenticated) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [isAuthenticated])

    function onLogin(user: string, token: string) {
        tokenService.setToken(token);
        setUser(user);
        setIsAuthenticated(true);
    }

    const items: SideBarMenuItem[] = [
        {
            id: 1,
            label: 'Inicio',
            icon: FcHome,
            path: '/'
        },
        {
            id: 2,
            label: 'Canales de Ideas',
            icon: FcIdea,
            path: '/canales-de-ideas'
        },
        {
            id: 3,
            label: 'Grupos de Ayuda',
            icon: FcConferenceCall,
            path: '/grupos-de-ayuda'
        },
    ];

    const cardProfile: CardProfile = {
        id: 1,
        displayName: 'Lucas Rosi',
        title: 'FullStack Developer',
        photoUrl: profileImage,
        path: '/perfil'
    }

  return (
    <>
        {
            isAuthenticated ? 
            <>
                <Header />
                <SideBarMenu items={items} card={cardProfile} />
                <main>
                    <Suspense fallback={<p>Cargando...</p>}>
                        <Routes>
                            <Route
                                path="/perfil"
                                element={
                                    <PrivateRoute isAuthenticated={isAuthenticated} element={<ProfilePage />} />
                                }
                            />
                            <Route 
                                path="/" 
                                element={
                                    <PrivateRoute isAuthenticated={isAuthenticated} element={<HomePage />} />
                                } 
                            />
                            <Route 
                                path="/canales-de-ideas" 
                                element={
                                    <PrivateRoute isAuthenticated={isAuthenticated} element={<IdeaChannelsPage />} />
                                } 
                            />
                            <Route 
                                path="/canales-de-ideas/:id/foro" 
                                element={
                                    <PrivateRoute isAuthenticated={isAuthenticated} element={<ForumPage />} />
                                } 
                            />
                            <Route 
                                path="/grupos-de-ayuda" 
                                element={
                                    <PrivateRoute isAuthenticated={isAuthenticated} element={<SupportGroupsPage />} />
                                } 
                            />
                            <Route 
                                path="/crear-grupos-de-ayuda" 
                                element={
                                    <PrivateRoute isAuthenticated={isAuthenticated} element={<AddSupportGroupsPage />} />
                                } 
                            />
                            <Route 
                                path="/detalle-grupo-de-ayuda" 
                                element={
                                    <PrivateRoute isAuthenticated={isAuthenticated} element={<DetailSupportGroupsPage />} />
                                } 
                            />
                            <Route 
                                path="*" 
                                element={<HomePage />} 
                            />
                        </Routes>
                    </Suspense>
                </main>
            </> 
            : 
            <Routes>
                <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
            </Routes>
        }
        
    </>
  );
}

export default App;
