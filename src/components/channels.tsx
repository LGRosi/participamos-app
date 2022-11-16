import { Channel } from "../models/channels.interfaces";
import "../scss/components/_channels.scss";
import { BsHash } from "react-icons/bs";
import { useState } from "react";

function Channels() {

    // const [channels, setChannels] = useState([]);

    const arrayChannels: Channel[] = [
        {
            id: 1,
            icon: BsHash,
            title: 'Educación'
        },
        {
            id: 2,
            icon: BsHash,
            title: 'Salud'
        },
        {
            id: 3,
            icon: BsHash,
            title: 'Donaciones'
        },
        {
            id: 4,
            icon: BsHash,
            title: 'Transporte Público'
        },
    ];

    return(
        <div className="div-channel-container">
            <p className="p-title">Canales de ideas:</p>
            <ul className="ul-channel-container">
                {
                    arrayChannels.map(channelItems => (
                        <li key={channelItems.id} className="li-channel-element">
                            <button type="button">
                                <channelItems.icon color="#4e42d4" size={25} />
                                <p className="p-title-element">
                                    { channelItems.title }
                                </p>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Channels;