import React, { useState } from "react";

import styles from "./Footer.module.css";

import Abrir from "../assets/img/abrir-icon.png";
import Face from "../assets/img/face-icon.png";
import Insta from "../assets/img/insta-icon.png";
import Twitter from "../assets/img/twitter-icon.png";
import Youtube from "../assets/img/youtube-icon.png";
import Linkedin from "../assets/img/in-icon.png";
import Master from "../assets/img/master-icon.png";
import Visa from "../assets/img/visa-icon.png";
import American from "../assets/img/american-icon.png";
import Elo from "../assets/img/elo-icon.png";
import Hiper from "../assets/img/hiper-icon.png";
import Paypal from "../assets/img/paypal-icon.png";
import Boleto from "../assets/img/boleto-icon.png";
import Vtex from "../assets/img/vtex-icon.png";
import M3 from "../assets/img/footer-m3-icon.png";
import Vtex_logo from "../assets/img/footer-vtex-icon.png";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-wrapper"]}>
        <div className={styles["footer-flex"]}>
          <nav className={styles["footer-flex-list"]}>
            <div className={styles["footer-list-title"]}>
              <h4 className={styles["footer-title"]}>Institucional</h4>
              <ul className={styles["footer-list"]}>
                <li>Quem Somos</li>
                <li>Política de Privacidade</li>
                <li>Segurança</li>
                <li className={styles["footer-list-underline"]}>
                  Seja um Revendedor
                </li>
              </ul>
            </div>
            <div className={styles["footer-list-title"]}>
              <h4 className={styles["footer-title"]}>Dúvidas</h4>
              <ul className={styles["footer-list"]}>
                <li>Entrega</li>
                <li>Pagamento</li>
                <li>Trocas e Devoluções</li>
                <li>Dúvidas Frequentes</li>
              </ul>
            </div>
            <div className={styles["footer-list-title"]}>
              <h4 className={styles["footer-title"]}>Fale Conosco</h4>
              <ul className={styles["footer-list"]}>
                <li>Atendimento ao Consumidor</li>
                <li>(11) 4159 9504</li>
                <li>Atendimento Online</li>
                <li>(11) 99433-8825</li>
              </ul>
            </div>
          </nav>

          <nav className={styles["footer-mobile-flex-list"]}>
            <div className={styles["footer-mobile-list-flex"]}>
              <div className={styles["footer-mobile-list-title"]}>
                <h4
                  className={styles["footer-mobile-title"]}
                  onClick={handleToggle}
                >
                  Institucional
                </h4>
                {isOpen === true ? (
                  <ul className={styles["footer-mobile-list"]}>
                    <li>Quem Somos</li>
                    <li>Política de Privacidade</li>
                    <li>Segurança</li>
                    <li className={styles["footer-mobile-list-underline"]}>
                      Seja um Revendedor
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>

            <div className={styles["footer-mobile-list-title"]}>
              <h4
                className={styles["footer-mobile-title"]}
                onClick={handleToggle}
              >
                Dúvidas
              </h4>
              {isOpen === true ? (
                <ul className={styles["footer-mobile-list"]}>
                  <li>Entrega</li>
                  <li>Pagamento</li>
                  <li>Trocas e Devoluções</li>
                  <li>Dúvidas Frequentes</li>
                </ul>
              ) : null}
            </div>
            <div className={styles["footer-mobile-list-title"]}>
              <h4
                className={styles["footer-mobile-title"]}
                onClick={handleToggle}
              >
                Fale Conosco
              </h4>
              {isOpen === true ? (
                <ul className={styles["footer-mobile-list"]}>
                  <li>Atendimento ao Consumidor</li>
                  <li>(11) 4159 9504</li>
                  <li>Atendimento Online</li>
                  <li>(11) 99433-8825</li>
                </ul>
              ) : null}
            </div>
          </nav>

          <div className={styles["footer-list-abrir"]}>
            <a href="/">
              <img src={Abrir} alt="Abrir" />
            </a>
            <a href="/">
              <img src={Abrir} alt="Abrir" />
            </a>
            <a href="/">
              <img src={Abrir} alt="Abrir" />
            </a>
          </div>
        </div>

        <div className={styles["footer-list-icon"]}>
          <a href="/">
            <img src={Face} alt="Facebook" />
          </a>
          <a href="/">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="/">
            <img src={Youtube} alt="Youtube" />
          </a>
          <a href="/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <p>www.loremipsum.com</p>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-bottom-wrapper"]}>
          <div className={styles["footer-description"]}>
            <p className={styles["footer-description-desktop"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className={styles["footer-description-mobile"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. .
            </p>
          </div>
          <div className={styles["footer-cards"]}>
            <a href="/">
              <img src={Master} alt="Facebook" />
            </a>
            <a href="/">
              <img src={Visa} alt="Visa" />
            </a>
            <a href="/">
              <img src={American} alt="American" />
            </a>
            <a href="/">
              <img src={Elo} alt="Elo" />
            </a>
            <a href="/">
              <img src={Hiper} alt="Hiper" />
            </a>
            <a href="/">
              <img src={Paypal} alt="PayPal" />
            </a>
            <a href="/">
              <img src={Boleto} alt="Boleto" />
            </a>
            <a className={styles["footer-vtex"]} href="/">
              <img src={Vtex} alt="Vtex" />
            </a>
          </div>
        </div>

        <div className={styles["footer-by"]}>
          <p className={styles["footer-by-description"]}>Powered by</p>
          <img src={Vtex_logo} alt="Vtex" />
          <p className={styles["footer-by-description"]}>Developed by</p>
          <img src={M3} alt="Logo M3" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
