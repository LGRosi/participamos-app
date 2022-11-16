import { Channel } from "../models/channels.interfaces";
import "../scss/components/_channels.scss";
import { BsHash } from "react-icons/bs";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Channels() {

    // const [channels, setChannels] = useState([]);

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
    ];


    return(
        <div className="div-channel-container">
            <p className="p-title">Canales de ideas:</p>
            <ul className="ul-channel-container">
                {
                    arrayChannels.map(channelItems => (
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
    )
}

export default Channels;