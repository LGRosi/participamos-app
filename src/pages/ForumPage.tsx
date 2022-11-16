import NavBarForum from "../components/NavBarForum";
import "../scss/views/_forum-page.scss"

function ForumPage() {
    return(
        <>
            <NavBarForum />
            <section className="forum-page-container">
                <h2>¡Te damos la bienvenida a !</h2>
                <p className="description">Aquí puedes empezar a escribir tus ideas.</p>
            </section>
        </>
    )
}

export default ForumPage;