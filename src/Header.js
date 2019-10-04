import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div id="header" className="roll-in-blurred-left">
                <img alt="header_logo" src={require("./images/chuck_norris_header.png")}></img>      
                <p>a free JSON API for hand curated Chuck Norris facts</p>
            </div>
        )
    }
}