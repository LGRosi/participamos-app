import { Cards } from "../interfaces/cards.interfaces";

function Card ({ title, description, img, width, alt }: Cards) {
    return(
        <div className="card-general-container">
            <div className="info-container">
                <h3>{title}</h3>
                <p className="description">{description}</p>
            </div>
            <div className="image-container">
                <img src={img} width={width} alt={alt} />
            </div>
        </div>
    )
}

export default Card;