import React from "react";

import Modal from 'react-modal'
import styles from "./MenuHamb.module.css"

interface MenuHamb {
    isOpen: boolean;
    onRequestClose: () => void;
}

function MenuHamb ({isOpen, onRequestClose}: MenuHamb) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles['menu-hamb']}
        className={styles['menu-container']}
        >
            <h1>ENTRAR </h1>
            <h1>CURSOS </h1>
            <h1>SAIBA MAIS </h1>
            <h1>INSTITUCIONAIS </h1>
        </Modal>
    )
}


export default MenuHamb