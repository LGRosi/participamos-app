import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import "../scss/components/_modal-create-channels.scss";
import { ModalCreateChannelsProps } from "../interfaces/modalCreateChannelsProps.interfaces";
import * as channelsService from "../services/channels.services";

function ModalCreateChannels({ closeModal, addChannelToList  }: ModalCreateChannelsProps ) {

    const [newChannelName, setNewChannelName] = useState<string>("");

    const handleAddChannel = async () => {
        try {
            const trimmedName = newChannelName.trim();
            const newChannel = {
                name: trimmedName,
            };

            const savedChannel = await channelsService.saveChannel(newChannel);
            addChannelToList(savedChannel);
            closeModal(false);

        } catch (error) {
            console.error("Error al agregar el nuevo canal:", error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewChannelName(event.target.value);
    };

    const isInputEmpty = () => {
        return newChannelName.trim() === "";
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (event.target.classList.contains("modal-background")) {
                closeModal(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [closeModal]);

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-button-close-container">
                    <button onClick={() => closeModal(false)} type="button">
                        <IoClose size={24} />
                    </button>
                </div>
                <p className="modal-title">Agregar un nuevo canal</p>
                <div className="modal-body">
                    <p className="modal-description">Agregá el nombre de un tema social que quieras debatir</p>
                    <div className="modal-input-container">
                        <label className="modal-label-name">Nombre del canal</label>
                        <input
                            className="modal-input-name"
                            placeholder="Nombre del canal"
                            type="text"
                            value={newChannelName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button 
                        className="modal-button-confirm"  
                        type="button"
                        onClick={handleAddChannel} 
                        disabled={isInputEmpty()}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCreateChannels;