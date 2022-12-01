import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../interfaces/sideBarMenu.interfaces";
import { classNames } from "../utils/classes";
import { VscMenu } from "react-icons/vsc";
import SideBarMenuCardView from "./SideBarMenuCardView";
import SideBarMenuItemsView from "./SideBarMenuItemsView";
import "../scss/layouts/_side-bar-menu.scss";
import { CgLogOut } from "react-icons/cg";

interface SideBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export function SideBarMenu({ items, card }: SideBarMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function onLogout() {
    localStorage.removeItem("token");
    //   setIsAuthenticated(false);
  }

  return (
    <div
      className={classNames("side-bar-menu", isOpen ? "expanded" : "collapsed")}
    >
        <div className="navigate-container">
            <div className="menu-button">
                <button
                className="hamburger-button"
                type="button"
                onClick={handleClick}
                >
                <VscMenu size="22" />
                </button>
            </div>
            <SideBarMenuCardView card={card} isOpen={isOpen} />
            {items.map((item) => (
                <SideBarMenuItemsView key={item.id} item={item} isOpen={isOpen} />
            ))}
        </div>

        <div className="logout-container">
            <button type="submit" onClick={onLogout}>
            <CgLogOut size={25} color="white" />
            </button>
        </div>
    </div>
  );
}