import { FcConferenceCall, FcHome, FcIdea } from "react-icons/fc";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuItem } from "./models/sideBarMenu.interfaces";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import IdeaChannelsPage from "./pages/IdeaChannelsPage";
import SupportGroupsPage from "./pages/SupportGroupsPage";
import profileImage from "./assets/images/profile.png";
import Header from "./components/Header";
import ForumPage from "./pages/ForumPage";
import { Suspense, useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";


function PrivateRoute({ isAuthenticated, element, ...props }: any) {
    return isAuthenticated ? element : <Navigate to={'/login'} />;
}

function App() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if(user) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [user])

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

    const card = {
        id: 1,
        displayName: 'Lucas Rosi',
        title: 'FullStack Developer',
        photoUrl: profileImage,
        path: '/perfil'
    }

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Header />
      <SideBarMenu items={items} card={card} />
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
                    path="*" 
                    element={<HomePage />} 
                />
            </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
