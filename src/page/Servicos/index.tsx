import { Footer } from "../../components/Footer";
import styles from "./Servicos.module.css";
import { FaBuilding, FaTruck, FaHotel, FaUtensils } from "react-icons/fa";

export function Servicos() {
  const items = [
    {
      icon: <FaBuilding />,
      title: "Facilities",
      text: "Gestão completa de serviços de apoio e infraestrutura.",
    },
    {
      icon: <FaTruck />,
      title: "Logística",
      text: "Equipes eficientes para transporte e distribuição.",
    },
    {
      icon: <FaHotel />,
      title: "Hospitalidade",
      text: "Atendimento de excelência para hotéis, resorts e eventos.",
    },
    {
      icon: <FaUtensils />,
      title: "Alimentação",
      text: "Profissionais para restaurantes e cozinhas industriais.",
    },
  ];

  return (
    <>
      <section className={styles.servicos}>
        <div className={styles.header}>
          <h2>Setores que Impulsionamos</h2>
          <p>
            Atuamos em uma ampla gama de setores, fornecendo soluções de mão de
            obra que se adaptam às particularidades de cada cliente.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
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
