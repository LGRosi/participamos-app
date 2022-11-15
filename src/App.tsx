import { FcConferenceCall, FcHome, FcIdea, FcSettings } from "react-icons/fc";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuItem } from "./models/sideBarMenu.interfaces";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import SupportGroups from "./pages/SupportGroups";
import profileImage from "./assets/images/profile.png";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {

     const items: SideBarMenuItem[] = [
        {
            id: 1,
            label: 'Inicio',
            icon: FcHome,
            path: '/'
        },
        {
            id: 2,
            label: 'Ideas',
            icon: FcIdea,
            path: '/ideas'
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
        <Header />
        <SideBarMenu items={items} card={card} />
        <Routes>
            <Route path="/perfil" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/grupos-de-ayuda" element={<SupportGroups />} />

            <Route path="*" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
