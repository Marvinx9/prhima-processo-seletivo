import { Footer } from "../../components/Footer";
import styles from "./Carreiras.module.css";
import {
  FaUserTie,
  FaClock,
  FaTruck,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

export function Carreiras() {
  const items = [
    {
      icon: <FaStar />,
      title: "Experiência",
      text: "Anos de expertise na gestão de RH.",
    },
    {
      icon: <FaUserTie />,
      title: "Equipes Especializadas e Treinadas",
      text: "Profissionais qualificados e alinhados às necessidades do seu negócio.",
    },
    {
      icon: <FaClock />,
      title: "Rapidez e Segurança",
      text: "Processos ágeis e em conformidade com a legislação.",
    },
    {
      icon: <FaTruck />,
      title: "Mobilização",
      text: "Disponibilidade de equipes, mesmo em grandes demandas.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Processos 100% Compliance",
      text: "Transparência e conformidade em todas as etapas.",
    },
  ];

  return (
    <>
      <section className={styles.carreiras}>
        <div className={styles.header}>
          <h2>Por que escolher a PRHIMA?</h2>
          <p>
            Nos destacamos no mercado de terceirização de mão de obra pela nossa
            trajetória sólida e compromisso com a excelência. Construímos uma
            reputação de confiança e eficiência, garantindo que sua empresa
            encontre sempre os melhores resultados.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
