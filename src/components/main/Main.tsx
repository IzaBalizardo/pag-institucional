import React, { useState } from "react";

import styles from "./Main.module.css";

import Sobre from "../menu/sobre/Sobre";
import FormadePagamento from "../menu/formadepagamento/FormadePagamento";
import Entrega from "../menu/entrega/Entrega";
import Troca from "../menu/troca/Troca";
import Seguranca from "../menu/seguranca/Seguranca";
import Contato from "../menu/contato/Contato";

function Main() {
  const [step, setStep] = useState("");

  function render() {
    switch (step) {
      case "sobre":
        return <Sobre />;
      case "forma":
        return <FormadePagamento />;
      case "entrega":
        return <Entrega />;
      case "troca":
        return <Troca />;
      case "seguranca":
        return <Seguranca />;
      case "contato":
        return <Contato />;
      default:
        return <Sobre />;
    }
  }

  return (
    <div>
      <div className={styles["main-container"]}>
        <h1 className={styles["main-title-mobile"]}>institucional</h1>
        <ul>
          <li onClick={() => setStep("sobre")}>Sobre</li>
          <li onClick={() => setStep("forma")}>Forma de Pagamento</li>
          <li onClick={() => setStep("entrega")}>Entrega</li>
          <li onClick={() => setStep("troca")}>Troca e Devolução</li>
          <li onClick={() => setStep("seguranca")}>Segurança e Privacidade</li>
          <li onClick={() => setStep("contato")}>Contato</li>
        </ul>
        <div>
          <h1 className={styles["main-title-desktop"]}>institucional</h1>
          <div>{render()}</div>
        </div>


      </div>

      
    </div>
  );
}

export default Main;
