import ProfilePage from "../assets/images/profile.png";
import { SentMessageBoxProps } from "../interfaces/SentMessageBoxProps.interfaces";

function SentMessageBox({ bodyMessage, from }: SentMessageBoxProps) {
    return (
        <div className="sent-message-box-container">
            <img
                className="image-profile"
                src={ProfilePage}
                alt="Imagen del perfil"
            />
            <div className="container-of-all-texts">
                <div className="name-and-date-container">
                    <p className="name">{from}</p>
                    <p className="date">29/11/2022</p>
                </div>
                <p className="description-message">{bodyMessage}</p>
            </div>
        </div>
    );
}

export default SentMessageBox;
