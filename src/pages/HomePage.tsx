import Card from "../components/card";
import iconCreativity from "../assets/svg/creativity.svg";

function HomePage() {
    return(
        <section className="home-page-container">
            <h2>Inicio</h2>
            <Card 
                title="Titulo" 
                description="Descripción" 
                img={iconCreativity}
                width={140}
                alt="Creatividad"
            />
        </section>
    )

}

export default HomePage;