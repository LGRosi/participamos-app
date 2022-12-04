import { SupportGroups } from "../interfaces/supportGroups.interfaces";

function SupportGroupsPage() {

    const arraySupportGroups: SupportGroups[] = [
        {
            id: 1,
            title: 'Agrupación 1',
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
        },
        {
            id: 4,
            title: 'Agrupación 4',
            description: 'sdfdsfdsfds',
            image: 'dsfds'
        },
        {
            id: 4,
            title: 'Agrupación 4',
            description: 'sdfdsfdsfds',
            image: 'dsfds'
        },
        {
            id: 4,
            title: 'Agrupación 4',
            description: 'sdfdsfdsfds',
            image: 'dsfds'
        },
        {
            id: 4,
            title: 'Agrupación 4',
            description: 'sdfdsfdsfds',
            image: 'dsfds'
        },
        {
            id: 4,
            title: 'Agrupación 4',
            description: 'sdfdsfdsfds',
            image: 'dsfds'
        },
    ];


    return(
        <section>
            <h2>Grupos de ayuda</h2>
            <p>Acá podés encontrar todos los grupos de ayuda social en la cercanía de tu hogar</p>

            <form action="#">
                <label className="label-search" htmlFor="search">Búsqueda de agrupaciones sociales</label>
                <input 
                    className="input-search"
                    type="text"
                    value=""
                    placeholder="Búsqueda de agrupaciones sociales" 
                />
            </form>
            {
                arraySupportGroups.map(groupsItems => (
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