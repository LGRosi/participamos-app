import Comments from "../components/Comments";
import NavBarForum from "../components/NavBarForum";
import "../scss/views/_forum-page.scss"

function ForumPage() {

    return(
        <div className="forum-page-container">
            <NavBarForum />
            <section className="section-comments-container">
                <h2 className="title-forum-page">¡Te damos la bienvenida al {}!</h2>
                <p className="description-forum-page">Aquí puedes empezar a escribir tus ideas.</p>
                <Comments /> 
            </section>
        </div>
    )
}

export default ForumPage;