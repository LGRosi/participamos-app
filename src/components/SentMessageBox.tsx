import ProfilePage from "../assets/images/profile.png";

function SentMessageBox() {
    return(
        <div className="sent-message-box-container">
            <img className="image-profile" src={ProfilePage} alt="Imagen del perfil" />
            <div className="container-of-all-texts">
                <div className="name-and-date-container">
                    <p className="name">Nombre</p>
                    <p className="date">Fecha</p>
                </div>
                <p className="description">texto</p>
            </div>
        </div>
    )
}

export default SentMessageBox;