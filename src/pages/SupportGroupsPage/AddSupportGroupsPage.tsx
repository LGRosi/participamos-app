import { Link } from "react-router-dom";

function AddSupportGroupsPage() {

    function handleSubmit(event: React.FormEvent) {
      event.preventDefault();
    };

    return(
        <>
            <section className="add-support-groups-general-container">
                <h2>Crear grupo de ayuda</h2>
                <p className="sub-title-add-support-groups">
                    Acá podés crear tu grupo de ayuda social
                </p>

                <form className="form-add-support-groups" onSubmit={handleSubmit}>
                    <div className="fields-container">
                        <label className="label" htmlFor="title">Título</label>
                        <input className="input" type="text" id="title" name="title" />
                    </div>

                    <div className="fields-container">
                        <label className="label" htmlFor="description">Descripción</label>
                        <textarea className="input" id="description" name="description"></textarea>
                    </div>

                    <div className="fields-container">
                        <label className="label" htmlFor="image">Imagen</label>
                        <input type="file" id="image" name="image" accept="image/*" />
                    </div>

                    <Link to="/grupos-de-ayuda" className="link-router">
                        <button className="button-add" type="submit">Agregar</button>
                    </Link>
                </form>
            </section>
        </>
    )
}

export default AddSupportGroupsPage;