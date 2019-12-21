import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";
import './details.scss'
import icon from "../Founds/img/icon.png";
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            user: {}
        };
    }
    componentWillMount() {
        const id = this.props.match.params.id;
        const getUser = (post, json) => {
            this.setState({
                user: json.find(function (user) {
                    return user.id === post.userId;
                })
            });
        };
        fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/posts/' + id)
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                this.setState({post: json});
            })
            .then(() => {
                 fetch('https://my-json-server.typicode.com/fidanabbasova/petsavers-db/users/')
                    .then(response => response.json())
                    .then(json => {
                        getUser(this.state.post, json);
                    });
            });
    };
    render() {
        const {id, name, description, image, date, statusId} = this.state.post;
        const {name: userName, surname: userSurname, mobile} = this.state.user;
        const getStatus = () => {
            switch (statusId) {
                case "1": return "Lost";
                case "2": return "Found";
                case "3": return "Adopt";
            }
        };
        return (
            <Router className="details-page">
                <div className='details-section container-fluid'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-4">
                                <div className='pet-img-container'>
                                    <div className="pet-img" style={{ backgroundImage: "url("+ image +")"}}></div>
                                    <div className="pet-hover d-flex justify-content-center align-items-center">
                                        <img src={icon} className="pet-hover-icon" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="pet-content pet-content-item">
                                    <h3 className="pet-name font-weight-bold">{name}</h3>
                                    <h3 className="pet-description">{description}</h3>
                                    <h3 className="user">{getStatus()} by <strong>{userName} {userSurname}</strong></h3>
                                    <h3 className="contact"><i className="fas fa-phone"></i> {mobile}</h3>
                                    <h3 className="found-date"><i className="far fa-clock font-weight-bold"></i> {date}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Details;