import "../scss/views/_idea-channels-page.scss";
import { BsPlus } from 'react-icons/bs';
import Channels from "../components/channels";

function IdeaChannelsPage() {
    return (
      <section>
        <h2>Elegí un canal para aportar tus ideas</h2>
        <div className="div-add-channel-container">
          <button
            type="button"
            className="button-add-channel"
          >
            <BsPlus size={23} />
            Agregar un canal
          </button>
        </div>

        <div>
            <Channels />
        </div>
      </section>
    );

}

export default IdeaChannelsPage;