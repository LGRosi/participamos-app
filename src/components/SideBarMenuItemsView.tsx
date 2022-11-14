import { SideBarMenuItem } from "../models/sideBarMenu.interfaces";
import { classNames } from "../utils/classes";
import "../scss/components/_side-bar-menu-items-view.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface SideBarMenuItemsViewProps {
    item: SideBarMenuItem;
    isOpen: boolean;
}

function SideBarMenuItemsView({ item, isOpen }: SideBarMenuItemsViewProps) {

    const [isClosed, setIsOpen] = useState<boolean>(false);

    function handleClick() {
        setIsOpen(!isClosed);
    }

    return(
        <div className="side-bar-menu-item-view">
            <NavLink to={item.path}>
                <div className={classNames('item-content', isOpen ? '' : 'collapsed')} onClick={handleClick}>
                    <div className="icon">
                        <item.icon size="25" />
                    </div>
                    <span className="label">{item.label}</span>
                </div>
            </NavLink>
            { !isOpen ? <div className="tooltip">{item.label}</div> : '' }
        </div>
    );
}

export default SideBarMenuItemsView;