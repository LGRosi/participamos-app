import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { SupportGroups } from "../interfaces/supportGroups.interfaces";

function SupportGroupsPage() {

    const [search, setSearch] = useState<string>('');

    const arraySupportGroups: SupportGroups[] = [
        {
            id: 1,
            title: 'Hola mundo',
            description: 'dsfdsfdsfdsf',
            image: 'sdf'
        },
        {
            id: 2,
            title: 'Agrupación 2',
            description: 'dfdsfdsfdsf',
            image: 'sdf'
        },
        {
            id: 3,
            title: 'Agrupación 3',
            description: 'sdfdsfsdf',
            image: 'sdf'
        },
        {
            id: 4,
            title: 'Agrupación 4',
            description: 'sdfdsfdsfds',
            image: 'dsfds'
        }
    ];

    function handleChange(e: any) {
        setSearch(e.target.value);
    }

    return(
        <section>
            <h2>Grupos de ayuda</h2>
            <p className="sub-title-support-groups">Acá podés encontrar todos los grupos relacionados a la ayuda social</p>

             <form className="form-support-groups-search">
                    <label className="label-support-groups-search" htmlFor="search">Búsqueda de grupos de ayuda</label>
                    <div className="input-support-groups-container">
                        <input 
                            className="input-support-groups-search"
                            type="text"
                            value={search}
                            onChange={handleChange}
                            placeholder="Búsqueda de grupos de ayuda"
                        />
                        <GoSearch className="icon-support-groups-GoSearch" color="#4e42d4" size={16} />
                    </div>
                </form>
            {
                arraySupportGroups
                .filter(elementSearch => {
                    return search.toLowerCase() === ''
                        ? elementSearch
                        : elementSearch.title.toLowerCase().includes(search);
                })
                .map(groupsItems => (
                    <div key={groupsItems.id} className="support-groups-general-container">
                        <div className="info-support-groups-container">
                            <h3 className="title-support-groups">{groupsItems.title}</h3>
                            <p className="description-support-groups">{groupsItems.description}</p>
                        </div>
                        <div className="image-support-groups-container">
                            <img src={groupsItems.image} width="" alt="" />
                        </div>
                    </div>
                ))
            }
        </section>
    )

}

export default SupportGroupsPage;