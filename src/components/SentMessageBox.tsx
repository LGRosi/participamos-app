import ProfilePage from "../assets/images/profile.png";
import { SentMessageBoxProps } from "../interfaces/sentMessageBoxProps.interfaces";
import { formatDateTime } from "../utils/formatDateTime.utils";

function SentMessageBox({ bodyMessage, from, dateTime }: SentMessageBoxProps) {

    const formattedDateTime = formatDateTime(dateTime);

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
                    <p className="date">{formattedDateTime}</p>
                </div>
                <p className="description-message">{bodyMessage}</p>
            </div>
        </div>
    );
}

export default SentMessageBox;
