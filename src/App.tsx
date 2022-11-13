import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuItem } from "./models/sideBarMenu.interfaces";
import { FcConferenceCall, FcHome, FcIdea, FcSettings } from "react-icons/fc";
import profileImage from "./assets/images/profile.png";

function App() {

    const items: SideBarMenuItem[] = [
        {
            id: 1,
            label: 'Inicio',
            icon: FcHome,
            url: '/'
        },
        {
            id: 2,
            label: 'Ideas',
            icon: FcIdea,
            url: '/'
        },
        {
            id: 3,
            label: 'Grupos de ayuda',
            icon: FcConferenceCall,
            url: '/'
        },
        {
            id: 4,
            label: 'Configuración',
            icon: FcSettings,
            url: '/'
        },
    ];

    const card = {
        id: 1,
        displayName: 'Lucas Rosi',
        title: 'FullStack Developer',
        photoUrl: profileImage,
        url: '/'
    }

  return (
    <>
      <SideBarMenu items={items} card={card}></SideBarMenu>
      {/* <Header /> */}
      {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="*" element={<Home />} />
        </Routes> */}
    </>
  );
}

export default App;
