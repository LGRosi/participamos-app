import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../models/sideBarMenu.interfaces";
import { classNames } from "../utils/classes";
import { VscMenu } from "react-icons/vsc";
import SideBarMenuCardView from "./SideBarMenuCardView";
import SideBarMenuItemsView from "./SideBarMenuItemsView";
import "../scss/layouts/_side-bar-menu.scss";

interface SideBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export function SideBarMenu({ items, card }: SideBarMenuProps) {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    function handleClick() {
        setIsOpen(!isOpen);
    }

  return(
    <div className={classNames('side-bar-menu', isOpen ? 'expanded' : 'collapsed')}>
        <div className="menu-button">
            <button className="hamburger-button" type="button" onClick={handleClick}>
                <VscMenu size="22" />
            </button>
        </div>
        <SideBarMenuCardView card={card} isOpen={isOpen} />
        {
            items.map(item => (
                <nav>
                    <SideBarMenuItemsView key={item.id} item={item} isOpen={isOpen} />
                </nav>
            ))
        }
    </div>
  );
}