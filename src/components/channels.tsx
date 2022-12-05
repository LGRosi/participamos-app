import { Channel } from "../interfaces/channels.interfaces";
import "../scss/components/_channels.scss";
import { BsHash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoSearch } from "react-icons/go";


function Channels() {

    const [search, setSearch] = useState<string>("");

    const arrayChannels: Channel[] = [
        {
            id: 1,
            icon: BsHash,
            title: 'Educación',
            path: 'educacion'
        },
        {
            id: 2,
            icon: BsHash,
            title: 'Salud',
            path: 'salud'
        },
        {
            id: 3,
            icon: BsHash,
            title: 'Donaciones',
            path: 'donaciones'
        },
        {
            id: 4,
            icon: BsHash,
            title: 'Transporte Público',
            path: 'transporte-publico'
        },
        {
            id: 5,
            icon: BsHash,
            title: 'Calles',
            path: 'calles'
        }
    ];

    function handleChange(e: any) {
        setSearch(e.target.value);
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
                        arrayChannels
                        .filter(elementSearch => {
                            return search.toLowerCase() === ""
                                ? elementSearch
                                : elementSearch.title.toLowerCase().includes(search);
                        })
                        .map(channelItems => (
                            <Link key={channelItems.id} to={`canal-${channelItems.path}/foro`}>
                                <li key={channelItems.id} className="li-channel-element">
                                    <channelItems.icon color="#4e42d4" size={25} />
                                    <p className="p-title-element">
                                        { channelItems.title }
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