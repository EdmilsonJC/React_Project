import React from "react";

import Logo from './imgs/Iron.png'

export default function Header(){

    return(
        <header>
            <img src={Logo}/>
            <h1>ED de Ferro</h1>
        </header>
    )
}