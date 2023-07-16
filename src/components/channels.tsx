import { Channel } from "../interfaces/channels.interfaces";
import "../scss/components/_channels.scss";
import { BsHash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import * as channelsService from "../services/channels.services";

function Channels({ channels }: { channels: Channel[] }) {

    const [search, setSearch] = useState<string>("");
    // const [channels, setChannels] = useState<Channel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAllChannels = async () => {
        try {
            setLoading(true);
            await channelsService.getAllChannels();
            // const allChannels = await channelsService.getAllChannels();
            // setChannels(allChannels);

        } catch (error) {
            console.error("Error al obtener los canales:", error);

        } finally {
            setLoading(false);
        }
    };

    function handleChange(eventSearch: React.ChangeEvent<HTMLInputElement>) {
      setSearch(eventSearch.target.value);
    }

    useEffect(() => {
        fetchAllChannels();
    }, []);

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
                {
                    loading
                    ? (<p className="loading">Cargando canales...</p>)
                    : (
                        <ul className="ul-channel-container">
                            {
                                channels
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
                    )
                }
            </div>
        </>
    )
}

export default Channels;