import iconCreativity from "../assets/svg/creativity.svg";
import iconFourPeople from "../assets/svg/four-people.svg";
import iconHumanitarianHelpOne from "../assets/svg/humanitarian-help-one.svg";
import Card from "../components/card";

function HomePage() {
    return(
        <section className="home-page-container">
            <h2 className="initial-greeting">¡Hola, <span className="name">Lucas</span>!</h2>
            <p className="sub-title">Hoy es un gran día para ayudar a la sociedad</p>
            <div className="cards-container">
                <Card
                    title="Grandes Ideas" 
                    description="Comentá tus ideas para solucionar problemáticas sociales" 
                    img={iconCreativity}
                    width={130}
                    alt="Creatividad"
                />
                <Card 
                    title="Grupos de Ayuda" 
                    description="Podés encontrar centros de ayuda en la cercanía de tu hogar" 
                    img={iconFourPeople}
                    width={130}
                    alt="Creatividad"
                />
                <Card 
                    title="Donaciones" 
                    description="Eventos solidarios para fomentar donaciones a quien más lo necesita" 
                    img={iconHumanitarianHelpOne}
                    width={130}
                    alt="Creatividad"
                />
            </div>
        </section>
    )

}

export default HomePage;