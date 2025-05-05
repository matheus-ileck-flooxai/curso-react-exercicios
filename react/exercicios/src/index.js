import React from "react";
import ReactDom from 'react-dom'
import Filho from "./componentes/Filho";
import Pai from "./componentes/Pai";

ReactDom.render(
    <div>
        <Pai nome="Matheus" sobrenome="Ileck" >
            <Filho nome="Pedro" />
            <Filho nome="Larissa"/>
            <Filho nome="Carla"/>
        </Pai>


    </div>
    , document.getElementById('root'))

