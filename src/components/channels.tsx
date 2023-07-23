import { useEffect, useState } from "react";
import { BsHash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Channel } from "../interfaces/channels.interfaces";

function Channels({ channels }: { channels: Channel[] }) {

    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    function handleChange(eventSearch: React.ChangeEvent<HTMLInputElement>) {
        setSearch(eventSearch.target.value);
    }

    useEffect(() => {
        setLoading(false);
    }, [channels]);

    return (
        <>
            <div className="div-channel-container">
                <p className="p-title">Canales de ideas</p>
                <form className="form-channel-search">
                    <label className="label-channel-search" htmlFor="search">
                        Búsqueda de canales de ideas
                    </label>
                    <div className="input-channel-container">
                        <input
                            className="input-channel-search"
                            type="text"
                            value={search}
                            onChange={handleChange}
                            placeholder="Búsqueda de canales de ideas"
                        />
                        <GoSearch
                            className="icon-channel-GoSearch"
                            color="#4e42d4"
                            size={16}
                        />
                    </div>
                </form>
                {
                    loading 
                    ? (<p className="loading">Cargando canales...</p>) 
                    : (
                        <ul className="ul-channel-container">
                            {
                                channels
                                .filter((elementSearch: any) => {
                                    return search.toLowerCase() === ""
                                    ? elementSearch
                                    : elementSearch.name.toLowerCase().includes(search);
                                })
                                .map((channelItems: any) => (
                                    <Link key={channelItems._id} to={`${channelItems.name}/foro`}>
                                        <li key={channelItems._id} className="li-channel-element">
                                            <BsHash color="#4e42d4" size={25} />
                                            <p className="p-title-element">{channelItems.name}</p>
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </>
    );
}

export default Channels;
