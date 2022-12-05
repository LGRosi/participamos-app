import { useState } from "react";
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
            <p>Acá podés encontrar todos los grupos de ayuda social en la cercanía de tu hogar</p>

            <form>
                <label className="label-search" htmlFor="search">Búsqueda de agrupaciones sociales</label>
                <input 
                    className="input-search"
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Búsqueda de agrupaciones sociales" 
                />
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