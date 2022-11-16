import { GoSearch } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import { BsHash } from "react-icons/bs";
import "../scss/components/_nav-bar-forum.scss";

function NavBarForum() {
    return(
        <div className="nav-bar-forum-container">
            <div className="name-channel-forum-container">
                <BsHash color="#FFFFFF" />
                <p className="name-channel">NavBarForum</p>
            </div>
            <div className="icons-search-and-people-container">
                <button type="button">
                    <GoSearch color="#FFFFFF" size={15} />
                </button>
                <button type="button">
                    <BsPeopleFill color="#FFFFFF" size={17} />
                </button>
            </div>
        </div>
    )
}

export default NavBarForum;