import "../scss/components/_nav-bar-forum.scss";
import { GoSearch } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function NavBarForum() {

    const { id } = useParams();

    useEffect(() => {
    }, [id]);

    //TODO: Finalizar la comunidación con el ChannelsProvider
    // const channel = useChannelContext();

    return(
        <div className="nav-bar-forum-container">
            <div className="name-channel-forum-container">
                <p className="name-channel">
                    <span className="span-hash"># {id}</span>
                    {/* {channel && channel.title} */}
                </p>
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