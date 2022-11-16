import "../scss/components/_ideas.scss";
import { BsPlus } from 'react-icons/bs';

function Ideas() {
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
            
        </div>
      </section>
    );

}

export default Ideas;