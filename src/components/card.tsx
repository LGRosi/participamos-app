import { Cards } from "../interfaces/cards.interfaces";

function Card ({ title, description, img, width, alt }: Cards) {
    return(
        <div className="card-general-container">
            <div className="info-card-container">
                <h3 className="title-card">{title}</h3>
                <p className="description-card">{description}</p>
            </div>
            <div className="image-card-container">
                <img src={img} width={width} alt={alt} />
            </div>
        </div>
    )
}

export default Card;