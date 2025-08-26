import styles from "./Footer.module.css";
import logo from "/logo.jpeg";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.column}>
          <a href="#">Fale conosco</a>
          <a href="#">Conheça nossos serviços</a>
          <a href="#">Recrutamento e Seleção</a>
          <a href="#">Gestão de Estagiários</a>
          <a href="#">Terceirização de Temporários</a>
          <a href="#">Plano de Cargos e Salários</a>
          <a href="#">Pesquisa e Diagnóstico Organizacional</a>
          <a href="#">Avaliação de Desempenho</a>
          <a href="#">Avaliação Psicológica</a>
          <a href="#">Treinamentos e Palestras</a>
        </div>

        <div className={styles.column}>
          <a href="#">Acessar minha conta</a>
          <a href="#">Portal de Estágios</a>
          <a href="#">Central de Ajuda</a>
          <a href="#">Ouvidoria</a>
          <a href="#">Tratamento de Dados</a>
          <a href="#">Política de Privacidade</a>
        </div>

        <div className={styles.column}>
          <a href="#">Fale conosco</a>
          <a href="#">RHF Carreiras</a>
          <a href="#">Análise e Elaboração de Currículos</a>
          <a href="#">Orientação de Carreira</a>
          <a href="#">Orientação Vocacional</a>
          <a href="#">Treinamento para Entrevistas</a>
          <a href="#">Tradução de Currículo</a>
          <a href="#">Coaching</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <img src={logo} alt="RHF Talentos" className={styles.logo} />

        <div className={styles.socials}>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>

        <p>
          Edifício Everest - R. Comendador Araújo, 143 - 5º andar - sala 51 -
          Centro, Curitiba - PR, 80420-000
        </p>
        <p>Copyright © 2025 RHF Talentos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
