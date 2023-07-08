import { classNames } from "../utils/classes";
import "../scss/components/_side-bar-menu-card-view.scss";
import { Link } from "react-router-dom";
import { SideBarMenuCardViewProps } from "../interfaces/sideBarMenuCardViewProps.interfaces";

function SideBarMenuCardView({ card, isOpen }: SideBarMenuCardViewProps) {
    return(
        <div className="side-bar-menu-card-view">
            <img 
                className="profile" 
                src={card.photoUrl} 
                alt={card.displayName} 
                width="100%"
            />
            <div className={classNames('profile-info', isOpen ? '' : 'collapsed')}>
                <div className="name">{card.displayName}</div>
                <div className="title">{card.title}</div>
                <div className="path">
                    <Link to={card.path}>Ir al perfil</Link>
                </div>
            </div>
        </div>
    ) 
}

export default SideBarMenuCardView;