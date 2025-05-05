import React from "react";
import ReactDom from 'react-dom'
import Multi from "./componentes/Multiplos";

ReactDom.render(
    <div>
        <Multi.BoaTarde nome='Matheus' idade={23} />
        <Multi.BoaNoite nome='Dani' idade={23} />

    </div>
    , document.getElementById('root'))

