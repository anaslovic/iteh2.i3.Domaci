import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import Models from './Models'
import Add from './Add'
import Agents from './Agents';


export default class Header extends Component {
    render(){
        return (
            <Router>
                <div>
                    <nav className="navbar pt-4 navbar-expand-lg navbar-light bg-dark text-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link text-light" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/allAgents">AGENTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/allModels">MODELS</Link> &nbsp;
                                </li >
                                
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/addition">ADD MODELS</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/allModels" component={Models}/>
                    <Route exact path="/addition" component={Add}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/allAgents" component={Agents}/>
                </div>
            </Router>
        );
    }
}


