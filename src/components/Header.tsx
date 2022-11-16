import logoParticipamos from "../assets/svg/icon-logo-participamos-white.svg";
import "../scss/layouts/_header.scss";

function Header() {

  return (
    <header>
        <img src={logoParticipamos} width={20} alt="Logo de la app Participamos" />
        <h1>Participamos</h1>
    </header>
  );
}

export default Header;
