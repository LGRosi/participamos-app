import "../scss/components/_side-bar-menu-items-view.scss";
import { classNames } from "../utils/classes.utils";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SideBarMenuItemsViewProps } from "../interfaces/sideBarMenuItemsViewProps.interfaces";

function SideBarMenuItemsView({ item, isOpen }: SideBarMenuItemsViewProps) {

    const [isClosed, setIsOpen] = useState<boolean>(false);

    function handleClick() {
        setIsOpen(!isClosed);
    }

    return(
        <div className="side-bar-menu-item-view">
            <NavLink to={item.path}>
                <nav>
                    <div className={classNames('item-content', isOpen ? '' : 'collapsed')} onClick={handleClick}>
                        <button type="button" className="icon">
                            <item.icon size="25" />
                        </button>
                        <span className="label">{item.label}</span>
                    </div>
                </nav>
            </NavLink>
        </div>
    );
}

export default SideBarMenuItemsView;