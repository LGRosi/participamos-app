import ProfilePage from "../assets/images/profile.png";

function SentMessageBox() {
    return(
        <div className="sent-message-box-container">
            <img className="image-profile" src={ProfilePage} alt="Imagen del perfil" />
            <div className="container-of-all-texts">
                <div className="name-and-date-container">
                    <p className="name">Lucas Rosi</p>
                    <p className="date">29/11/2022</p>
                </div>
                <p className="description-message">Priorizar la implementación o reparación de la calefacción para los colegios primarios y secundarios</p>
            </div>
        </div>
    )
}

export default SentMessageBox;