import React from 'react';

import styles from './Newsletter.module.css';

import Whats from '../assets/img/whats-icon.png';
// import Arrow_icon from '../assets/img/arrow.logo.png';
import ScrollPage from './NewsletterUp';

const Newsletter = () => {
    return (
        <div className={styles["news-container"]}>
            <div className={styles["icon-wrapper-container"]}>
                <div className={styles["icon-wrapper"]}>
                    <a href="/"><img src={Whats} alt="WhatsApp" /></a>
                    <ScrollPage/>
                    {/* <a href="/"><img src={Arrow_icon} alt="Abrir" /></a> */}
                </div>
            </div>
            <div className={styles["input-email"]}>
                <div className={styles["input-news-container"]}>
                    <label className={styles["input-news-title"]} htmlFor="email">ASSINE NOSSA NEWSLETTER</label>
                    <div className={styles["input-button"]}>
                        <input className={styles["input-news"]} placeholder="E-mail" type="text" />
                        <button>ENVIAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
        
}

export default Newsletter;