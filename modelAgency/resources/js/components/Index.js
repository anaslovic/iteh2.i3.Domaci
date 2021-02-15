import { extend } from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header'

export default class Index extends Component {
    render(){
        return (
            <div className="container">
                <Header/>
                <Footer/>
            </div>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}