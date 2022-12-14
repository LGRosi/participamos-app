import "../scss/views/_idea-channels-page.scss";
import { BsPlus } from 'react-icons/bs';
import { useEffect, useState } from "react";
import Channels from "../components/channels";
import ModalCreateChannels from "../components/ModalCreateChannels";

function IdeaChannelsPage() {
    const [openModal, setOpenModal] = useState<boolean>(false);

    // useEffect(() => {
    //   channelsService.channels();
    // }, []);

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
            openModal && <ModalCreateChannels closeModal={setOpenModal} />
        }
        <div>
            <Channels />
        </div>
      </section>
    );

}

export default IdeaChannelsPage;