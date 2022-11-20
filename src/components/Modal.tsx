import {IoClose} from "react-icons/io5";
import "../scss/components/_modal.scss";

function Modal({ closeModal }: any) {
    return (
      <div className="modal-background">
        <div className="modal-container">
            <button className="modal-button-close" onClick={() => closeModal(false)} type="button">
                <IoClose size={22} />
            </button>
            <p className="modal-title">Nuevo canal</p>
            <div className="modal-body">
                <p className="modal-description">Agregá el nombre de un tema social que quieras debatir.</p>
                <div className="modal-input-container">
                    <label className="modal-label-name">Nombre de un tema social</label>
                    <input className="modal-input-name" placeholder="Nombre del canal..." type="text" />
                </div>
            </div>
            <div className="modal-footer">
                <button className="modal-button-confirm" onClick={() => closeModal(false)} type="button">
                    Confirmar
                </button>
            </div>
        </div>
      </div>
    );
}

export default Modal;