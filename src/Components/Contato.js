import React from 'react';
import styles from './Contato.module.css';
import maquina from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Contato" descripition="Entre em contato" />
      <img src={maquina} alt="maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>carla.braga.dev@gmail.com</li>
          <li>(11)98055-1111</li>
          <li>Rua logo ali, 70</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
