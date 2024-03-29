import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from "./NavbarItem";
import logo from './img/logo-text.png';
import './navbar.scss';
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";
class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
        };
        localStorage.setItem("userId", "4");
    }
    loggedIn() {
        if(localStorage.getItem("userId")) return <LoggedIn/>;
        else return <NotLoggedIn/>;
    }
    render() {
        // console.log(localStorage.getItem("userId"));
        const navbarItems = [
            {id: 1, name: 'Home'},
            {id: 2, name: 'Lost'},
            {id: 3, name: 'Found'},
            {id: 4, name: 'Adopt'},
            {id: 5, name: 'Contact'}
        ];
        return(
            <nav className='navbar navbar-expand-lg navbar-light'>
                <div className='container'>
                    <Link to={"/"}>
                        <img src={logo} className="navbar-brand button navbar-img" alt='Logo'/>
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler-line navbar-toggler-line-top"></div>
                        <div className="navbar-toggler-line navbar-toggler-line-middle"></div>
                        <div className="navbar-toggler-line navbar-toggler-line-bottom"></div>
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
                        {this.loggedIn()}
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;