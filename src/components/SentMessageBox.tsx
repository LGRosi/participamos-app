import ProfilePage from "../assets/images/profile.png";

function SentMessageBox({ text }: { text: string }) {
    return(
        <div className="sent-message-box-container">
            <img 
                className="image-profile" 
                src={ProfilePage} 
                alt="Imagen del perfil" 
            />
            <div className="container-of-all-texts">
                <div className="name-and-date-container">
                    <p className="name">Lucas Rosi</p>
                    <p className="date">29/11/2022</p>
                </div>
                <p className="description-message">{ text }</p>
            </div>
        </div>
    )
}

export default SentMessageBox;