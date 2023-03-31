import React, {useState} from 'react';

import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import MenuHamb from '../components/header/MenuHamb';

const Institucional = () => {

  const [openModal, setOpenModal] = useState(false)
  return (
  <div>
    <Header handleOpenModal={() => setOpenModal(true)}
/>
    <MenuHamb isOpen={openModal} onRequestClose={() => setOpenModal(false)}/>
    <Main/>
    <Newsletter/>
    <Footer/>
  </div>
  )
};

export default Institucional;
