import { Component } from 'react';
import "./Header.css"
import Logo from "../../dist/img/Logo.png"
class Header extends Component {

    render() {
        return (
            <header>
                <div className="user--acess">
                    <div className="user--img">
                        <img src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png" alt="" />
                    </div>
                    <div className="user--ident">
                        <h1>Caique Ramos</h1>
                        <span>Vendedor - CG/MS</span>
                    </div>
                </div>
                <div className="header--logo">
                    <img src={Logo} alt="" />
                </div>
            </header>
        );
    }
}

export default Header;
