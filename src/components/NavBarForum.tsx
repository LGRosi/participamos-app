import { GoSearch } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import "../scss/components/_nav-bar-forum.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function NavBarForum() {

    const { id } = useParams();

    useEffect(() => {
    }, [id]);

    return(
        <div className="nav-bar-forum-container">
            <div className="name-channel-forum-container">
                <p className="name-channel"><span className="span-hash">#</span>{id}</p>
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