import logoParticipamos from "../assets/svg/icon-logo-participamos.svg";
import "../scss/components/_header.scss";

function Header() {

  return (
    <header>
        <img src={logoParticipamos} width={25} alt="Logo de la app Participamos" />
        <h1>Participamos</h1>
    </header>
  );
}

export default Header;
