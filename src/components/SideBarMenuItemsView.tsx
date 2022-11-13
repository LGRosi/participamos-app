import { SideBarMenuItem } from "../models/sideBarMenu.interfaces";
import { classNames } from "../utils/classes";
import "../scss/components/_side-bar-menu-items-view.scss";

interface SideBarMenuItemsViewProps {
    item: SideBarMenuItem;
    isOpen: boolean;
}

function SideBarMenuItemsView({ item, isOpen }: SideBarMenuItemsViewProps) {
    return(
        <div className="side-bar-menu-item-view">
            <a href={item.url}>
                <div className={classNames('item-content', isOpen ? '' : 'collapsed')}>
                    <div className="icon">
                        <item.icon size="32" />
                    </div>
                    <span className="label">{item.label}</span>
                </div>
            </a>
            { !isOpen ? <div className="tooltip">{item.label}</div> : '' }
        </div>
    );
}

export default SideBarMenuItemsView;