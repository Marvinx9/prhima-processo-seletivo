import { NavLink } from "react-router-dom";
import logo from "/logo.jpeg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} />
        <nav>
          <NavLink to="/" title="Home">
            HOME
          </NavLink>
          <NavLink to="/servicos" title="Servicos">
            SERVICOS RHF
          </NavLink>
          <NavLink to="/carreiras" title="Carreiras">
            RHF CARREIRAS
          </NavLink>
          <NavLink to="/" title="Convencao">
            CONVENÇÃO RHF
          </NavLink>
          <NavLink to="/" title="Servicos">
            BLOG
          </NavLink>
          <NavLink to="/" title="Servicos">
            PORTAL RHF
          </NavLink>
          <NavLink to="/" title="Servicos">
            CONTATO
          </NavLink>
          <a href="#" className={styles.outline}>
            SEJA UM FRANQUEADO
          </a>
          <a href="#" className={styles.primary}>
            NOSSA VAGAS
          </a>
        </nav>
      </header>
    </>
  );
}
