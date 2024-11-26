import { Link } from "react-router-dom";
import style from "./NotFound.module.css";
import Footer from "../Sections/Footer/Footer";
import logo from "../../utils/assets/logo.png";

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <nav className={style.navbar}>
        <div className={style.navbarLogo}>
          <img src={logo} alt="logo" />
          <h1>Oi, Sorria!</h1>
        </div>

        <button className={style.navbarButton} onClick={takeDashboard}>
          Login
        </button>
      </nav>
      <div className={style.card}>
        <h1 className={style.title}>404</h1>
        <h2 className={style.subtitle}>Página não encontrada</h2>
        <p className={style.text}>
          A página que você está procurando não existe ou foi removida.
        </p>
        <Link to="/" className={style.link}>
          Voltar para a página inicial
        </Link>
      </div>
      <footer className={style.footer}>
            <p>&copy; {new Date().getFullYear()} Oi, Sorria! Todos os direitos reservados.</p>
      </footer>
    </div>
  );

  function takeDashboard() {
    window.location.href = "http://localhost:3000/";
  }
};

export default NotFound;
