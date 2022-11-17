import ProfilePage from "../assets/images/profile.png";

function SentMessageBox() {
    return(
        <div className="sent-message-box-container">
            <img className="image-profile" src={ProfilePage} alt="Imagen del perfil" />
            <div className="container-of-all-texts">
                <div className="name-and-date-container">
                    <p className="name">Lucas Rosi</p>
                    <p className="date">17/11/2022</p>
                </div>
                <p className="description-message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga, molestiae ut officiis, autem atque eius voluptatibus beatae eaque odio doloribus quam dolore? Sunt, at fuga autem alias facilis accusantium?</p>
            </div>
        </div>
    )
}

export default SentMessageBox;