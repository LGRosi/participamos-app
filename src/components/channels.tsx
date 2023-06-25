import { Channel } from "../interfaces/channels.interfaces";
import "../scss/components/_channels.scss";
import { BsHash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

function Channels() {

    const [search, setSearch] = useState<string>("");
    const [stateChannel, setStateChannel] = useState<Channel[]>([]);

    useEffect(() => {
        getDataChannels();
    }, []);

    async function getDataChannels() {
        const dataChannels = await fetch("http://localhost:4000/api/channels");
        const channels = await dataChannels.json();
        setStateChannel(channels);
    }

    function handleChange(eventSearch: React.ChangeEvent<HTMLInputElement>) {
      setSearch(eventSearch.target.value);
    }


    return(
        <>
            <div className="div-channel-container">
                <p className="p-title">Canales de ideas</p>
                <form className="form-channel-search">
                    <label className="label-channel-search" htmlFor="search">Búsqueda de canales de ideas</label>
                    <div className="input-channel-container">
                        <input 
                            className="input-channel-search"
                            type="text"
                            value={search}
                            onChange={handleChange}
                            placeholder="Búsqueda de canales de ideas"
                        />
                        <GoSearch className="icon-channel-GoSearch" color="#4e42d4" size={16} />
                    </div>
                </form>
                <ul className="ul-channel-container">
                    {
                        stateChannel
                        .filter((elementSearch: Channel) => {
                            return search.toLowerCase() === ""
                                ? elementSearch
                                : elementSearch.name.toLowerCase().includes(search);
                        })
                        .map((channelItems: Channel) => (
                            <Link key={channelItems._id} to={`${channelItems.name}/foro`}>
                                <li key={channelItems._id} className="li-channel-element">
                                    <BsHash color="#4e42d4" size={25} />
                                    <p className="p-title-element">
                                        { channelItems.name }
                                    </p>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Channels;