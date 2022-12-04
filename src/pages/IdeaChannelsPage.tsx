import "../scss/views/_idea-channels-page.scss";
import { BsPlus } from 'react-icons/bs';
import Modal from "../components/Modal";
import { useState } from "react";
import Channels from "../components/channels";

function IdeaChannelsPage() {

    const [openModal, setOpenModal] = useState(false);

    return (
      <section>
        <h2>Elegí un canal para aportar tus ideas</h2>
        <div className="div-add-channel-container">
          <button
            type="button"
            className="button-add-channel"
            onClick={() => {
                setOpenModal(true);
            }}
          >
            <BsPlus size={23} />
            Agregar un canal
          </button>
        </div>
        {
            openModal && <Modal closeModal={setOpenModal} />
        }
        <div>
            <Channels />
        </div>
      </section>
    );

}

export default IdeaChannelsPage;