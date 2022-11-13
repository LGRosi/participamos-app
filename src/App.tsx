import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuItem } from "./models/sideBarMenu.interfaces";
import { FcAdvertising } from "react-icons/fc";

function App() {

    const items: SideBarMenuItem[] = [
        {
            id: '1',
            label: 'Hola',
            icon: FcAdvertising,
            url: '/'
        },
        {
            id: '2',
            label: 'Hola',
            icon: FcAdvertising,
            url: '/'
        },
        {
            id: '3',
            label: 'Hola',
            icon: FcAdvertising,
            url: '/'
        },
    ];

    const card = {
        id: 'card01',
        displayName: 'Lucas Rosi',
        title: 'FullStack Developer',
        photoUrl: '',
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
