import React from "react";

import CustomForm from "./form/CustomForm";

import styles from "../contato/Contato.module.css";

function Contato() {
    return (
        <div>
            <h2 className={styles["main-contato-title"]}>Preencha o formulário </h2>
                                <CustomForm/>
        </div>  

    )
}

export default Contato;