import { BsPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import ModalCreateChannels from "../components/ModalCreateChannels";
import Channels from "../components/Channels";
import { Channel } from "../interfaces/channels.interfaces";
import * as channelsService from "../services/channels.services";

function IdeaChannelsPage() {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [channels, setChannels] = useState<Channel[]>([]);

    const fetchChannelsFromAPI = async () => {
        try {
            const allChannels = await channelsService.getAllChannels();
            setChannels(allChannels);
        } catch (error) {
            console.error("Error al obtener los canales:", error);
        }
    };

    const handleAddChannel = async (newChannel: Channel) => {
        try {
            await channelsService.saveChannel(newChannel);
            closeModal();
            fetchChannelsFromAPI();
        } catch (error) {
            console.error("Error al agregar el nuevo canal:", error);
        }
    };

    useEffect(() => {
        fetchChannelsFromAPI();
    }, []);

    const closeModal = () => {
        setOpenModal(false);
        fetchChannelsFromAPI();
    };

    return (
        <section>
            <h2>Elegí un canal para aportar tus ideas</h2>
            <div className="div-add-channel-container">
                <button
                    type="button"
                    className="button-add-channel"
                    onClick={() => setOpenModal(true)}
                >
                    <BsPlus size={23} />
                    Agregar un canal
                </button>
            </div>
            {
                openModal && (
                    <ModalCreateChannels
                        closeModal={closeModal}
                        addChannelToList={handleAddChannel}
                    />
                )
            }
            <div>
                <Channels channels={channels} />
            </div>
        </section>
    );
}

export default IdeaChannelsPage;
