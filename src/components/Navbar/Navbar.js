import React, {Component} from 'react';
import NavbarItem from "./NavbarItem";
import logo from './img/logo-text.png';
import './navbar.scss';
class Navbar extends Component{
    render() {
        const navbarItems = [
            {id: 1, name: 'Home'},
            {id: 2, name: 'Lost'},
            {id: 3, name: 'Found'},
            {id: 4, name: 'Adopt'},
            {id: 5, name: 'Contact'}
        ];
        return(
            // navbar-light bg-light
            <nav className='navbar navbar-expand-lg navbar-light'>
                <div className='container'>
                    <img src={logo} className="navbar-brand button navbar-img" alt='Logo'/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {
                                navbarItems.map((navbarItem) => {
                                    return(
                                        <NavbarItem key={ navbarItem.id } name={ navbarItem.name }/>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;