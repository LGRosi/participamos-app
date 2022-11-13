import { SideBarMenuCard } from "../models/sideBarMenu.interfaces";
import { classNames } from "../utils/classes";

interface SideBarMenuCardViewProps {
    card: SideBarMenuCard;
    isOpen: boolean;
}

function SideBarMenuCardView({ card, isOpen }: SideBarMenuCardViewProps) {
    return(
        <div className="side-bar-menu-card-view">
            <img className="profile" src={card.photoUrl} width="100%" alt="Imagen de perfil" />
            <div className={classNames('profile-info', isOpen ? '' : 'collapsed')}>
                <div className="name">{card.displayName}</div>
                <div className="title">{card.title}</div>
                <div className="url">
                    <a href={card.url}>Ir al perfil</a>
                </div>
            </div>
        </div>
    ) 
}

export default SideBarMenuCardView;