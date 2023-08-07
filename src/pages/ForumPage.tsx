import Comments from "../components/Comments";
import NavBarForum from "../components/NavBarForum";
import "../scss/views/_forum-page.scss"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ForumPage() {

    const { id } = useParams<string>();

    useEffect(() => {}, [id]);

    return(
        <div className="forum-page-container">
            <NavBarForum />
            <section className="section-comments-container">
                <h2 className="title-forum-page">¡Te damos la bienvenida al canal {id}!</h2>
                <p className="description-forum-page">Acá podés empezar a escribir tus ideas</p>
                <Comments /> 
            </section>
        </div>
    )
}

export default ForumPage;