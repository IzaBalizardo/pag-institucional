import React from 'react';

import styles from './Header.module.css';

import Logo from '../assets/img/header-logo-m3.png'
import Lupa from '../assets/img/header-buscar-icon.png'
import Car from '../assets/img/header-car-icon.png'
import Home from '../assets/img/header-home-icon.png'
import Arrow from '../assets/img/header-arrow-icon.png'
import Menu from '../assets/img/menu-icon.png'


interface MenuHamb {
    handleOpenModal:() => void;
}


const Header = ({handleOpenModal} : MenuHamb) => {
    return (
        <div>
            <header>
                <div className={styles["header-container"]}>
                    <div className={styles["header-container-flex"]}>
                        {/* <div className={styles["header-nav"]}>
                            <a href="/">
                                <img src={Menu} alt="Menu" /></a>
                        </div> */}
                        <div>
                        <button className={styles["MenuHamb"]}
                    onClick={handleOpenModal}
                    >
                        <img src={Menu} alt=''/>
                    </button>
                        </div>
                        <div className={styles["header-logo"]}>
                            <a href="/">
                                <img src={Logo} alt="Logo M3" />
                            </a>
                        </div>
                    </div>

                    
                    <div className={styles["header-input-buscar"]}>
                        <input className={styles["header-input"]} type="text" placeholder="Buscar..." />
                        <img className={styles["header-lupa"]} src={Lupa} alt="Lupa" />
                    </div>
                    <div className={styles["header-input-carrinho"]}>
                        <a className={styles["header-text-entrar"]} href="/">
                            <h3>ENTRAR</h3>
                        </a>
                        <a className={styles["header-carrrinho"]} href="/">
                            <img src={Car} alt="Carrinho" />
                        </a>
                    </div>
                </div>
                
                <div className={styles["header-menu"]}>
                        <a href="/">
                            
                            <h3 >CURSOS</h3>
                            
                        </a>
                        <a href="/">
                            <h3>SAIBA MAIS</h3>
                        </a>
                        <a href="/">
                            <h3>INSTITUCIONAIS</h3>
                        </a>
                </div>
                    
            </header>

            <div className={styles["header-arrow-home"]}>
                <a href="/">
                    <img src={Home} alt="Home" />
                </a>
                <a className={styles["header-arrow"]} href="/">
                    <img src={Arrow} alt="Avançar" />
                </a>
                <a href="/">
                    <h4 className={styles["header-arrow-text"]}>INSTITUCIONAL</h4>
                </a>
                
            </div>
        </div>

    );
}

export default Header;