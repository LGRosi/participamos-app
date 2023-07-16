import "../scss/views/_idea-channels-page.scss";
import { BsPlus } from 'react-icons/bs';
import { useState } from "react";
import ModalCreateChannels from "../components/ModalCreateChannels";
import Channels from "../components/Channels";
import { Channel } from "../interfaces/channels.interfaces";

function IdeaChannelsPage() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [channels, setChannels] = useState<Channel[]>([]);

     function handleAddChannel(newChannel: Channel) {
      // Agregar el nuevo canal a la lista de canales
      setChannels((prevChannels) => [...prevChannels, newChannel]);
    };

    return (
        <section>
            <h2>Elegí un canal para aportar tus ideas</h2>
            <div className="div-add-channel-container">
                <button
                    type="button"
                    className="button-add-channel"
                    onClick={
                        () => {setOpenModal(true)}
                    }
                >
                    <BsPlus size={23} />
                    Agregar un canal
                </button>
            </div>
            {
                openModal
                && 
                <ModalCreateChannels 
                    closeModal={setOpenModal} 
                    addChannelToList={handleAddChannel} 
                />
            }
            <div>
                <Channels channels={channels} />
            </div>
        </section>
    );

}

export default IdeaChannelsPage;