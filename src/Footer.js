import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <div id="footer">
                <div id="contact">
                    <div><a href="https://twitter.com/MatChilling">Twitter</a></div>
                    <div><a href="https://github.com/chucknorris-io">Github</a></div>
                </div>
                <h3>Copy-Pasted by:<span> Louis Adrian Reyes</span></h3>
                <a href = "mailto:louisadrianreyes@yahoo.com?body = Message">louisadrianreyes@yahoo.com</a>
                <h5>Follow me on</h5>
                <div>
                    <img alt="facebook logo" src={require("./images/facebookLogo.png")}></img>
                    <img alt="instagram logo" src={require("./images/instagramLogo.png")}></img>
                </div>
            </div>
        )
    }
}

export default Footer