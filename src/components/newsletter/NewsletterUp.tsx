import { useState } from "react"

import Arrow_icon from '../assets/img/arrow-logo.png';

export default function ScrollPage() {

const [ pageYPosition, setPageYPosition ] = useState(0);

function getPageYAfterScroll(){
    setPageYPosition(window.scrollY);
}

window.addEventListener('scroll', getPageYAfterScroll);

  return (
    <div>
        <a href="/"><img src={Arrow_icon} alt="Abrir" /></a>
    </div>
  )
}