import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Home.module.css";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <main>
        <section className={styles.hero}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className={styles.carousel}
          >
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.text}>
                  <h2>CONHEÇA AS NOSSAS</h2>
                  <h1>
                    SOLUÇÕES PARA <br /> <span>SUA EMPRESA</span>
                  </h1>
                  <p>
                    Atuamos em diversas áreas e competências de RH, com
                    processos testados e aprovados em todo o país
                  </p>
                  <a href="#" className={styles.btn}>
                    SAIBA MAIS
                  </a>
                </div>
                <div className={styles.image}>
                  <img src="/banner.jpeg" alt="Equipe de trabalho" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.text}>
                  <h2>ENCONTRE OS MELHORES</h2>
                  <h1>
                    TALENTOS PARA <br /> <span>SUA EQUIPE</span>
                  </h1>
                  <p>
                    Conectamos profissionais e empresas com soluções rápidas e
                    eficientes.
                  </p>
                  <a href="#" className={styles.btn}>
                    SAIBA MAIS
                  </a>
                </div>
                <div className={styles.image}>
                  <img src="/banner.jpeg" alt="Equipe de trabalho" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
      <Footer />
    </>
  );
}
