import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { SupportGroups } from "../../interfaces/supportGroups.interfaces";
import imageDonationOne from "../../assets/images/donation-one.jpg";
import imageDonationTwo from "../../assets/images/donation-two.jpg";
import imageDonationThree from "../../assets/images/donate-three.jpg";
import imageDonationFour from "../../assets/images/donation-four.jpg";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function SupportGroupsPage() {

    const [search, setSearch] = useState<string>('');

    const arraySupportGroups: SupportGroups[] = [
        {
            id: 1,
            title: 'Grupo Donamos',
            description: 'Somos una agrupación de ayuda y donación voluntaria',
            image: imageDonationOne
        },
        {
            id: 2,
            title: 'Grupo Ayudemos',
            description: 'Fomentamos la participación de las personas para la donación',
            image: imageDonationTwo
        },
        {
            id: 3,
            title: 'Calle Solidaria',
            description: 'Somos un grupo con encuentros en la vía pública para ayudar a las personas más necesitadas',
            image: imageDonationThree
        },
        {
            id: 4,
            title: 'Comedor Comunitario',
            description: 'Tenemos varias sedes de comedores comunitarios para todas las personas que necesiten un plato de comida',
            image: imageDonationFour
        }
    ];

    function handleChange(eventSearch: React.ChangeEvent<HTMLInputElement>) {
        setSearch(eventSearch.target.value);
    }

    return (
        <section className="support-groups-general-container">
            <h2>Grupos de ayuda</h2>
            <p className="sub-title-support-groups">
                Acá podés encontrar todos los grupos relacionados a la ayuda social
            </p>
            <div className="div-add-support-groups-container">
                <Link to="/crear-grupos-de-ayuda">
                    <button
                        className="button-add-support-groups"
                        type="button"
                    >
                            <BsPlus size={23} />
                            Registrarse como grupo de ayuda
                    </button>
                </Link>
            </div>

            <form className="form-support-groups-search">
                <label className="label-support-groups-search" htmlFor="search">
                    Búsqueda de grupos de ayuda
                </label>
                <div className="input-support-groups-container">
                    <input
                        className="input-support-groups-search"
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Búsqueda de grupos de ayuda"
                    />
                    <GoSearch
                        className="icon-support-groups-GoSearch"
                        color="#4e42d4"
                        size={16}
                    />
                </div>
            </form>
            {
                arraySupportGroups
                    .filter((elementSearch) => {
                        return search.toLowerCase() === ""
                        ? elementSearch
                        : elementSearch.title.toLowerCase().includes(search);
                    })
                    .map((groupsItems) => (
                        <div key={groupsItems.id} className="card-support-groups-container">
                            <div className="info-support-groups-container">
                                <h3 className="title-support-groups">{groupsItems.title}</h3>
                                <p className="description-support-groups">
                                {groupsItems.description}
                                </p>
                            </div>
                            <div className="image-support-groups-container">
                                <img
                                    className="image-support-groups"
                                    src={groupsItems.image} 
                                    width="250" 
                                    alt={groupsItems.title} 
                                />
                            </div>
                            <button 
                                className="button-more-information" 
                                type="button"
                            >
                                Más información
                            </button>
                        </div>
                    ))
            }
        </section>
    );
}

export default SupportGroupsPage;