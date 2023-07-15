import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "../scss/components/_modal-create-channels.scss";
import { ModalCreateChannelsProps } from "../interfaces/modalCreateChannelsProps.interfaces";

function ModalCreateChannels({ closeModal }: ModalCreateChannelsProps ) {

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
                        <input className="modal-input-name" placeholder="Nombre del canal" type="text" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="modal-button-confirm" onClick={() => closeModal(false)} type="button">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCreateChannels;