import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Models from './Models';
import axios from 'axios';



export default class Add extends Component {

    constructor(){
        super();
        this.onChangeModels=this.onChangeModels.bind(this);
        this.onChangeID=this.onChangeID.bind(this);
        this.onChangeCenaIznajmljivanja=this.onChangeCenaIznajmljivanja.bind(this);
        this.onChangeGodiste=this.onChangeGodiste.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        this.state={
            imePrezime:' ',
            agent_id:' ',
            cenaIznajmljivanja:' ',
            godiste:' '
        };
    }

    onChangeModels(e){
        this.setState({
            imePrezime:e.target.value
        });
    }

    onChangeGodiste(e){
        this.setState({
            godiste:e.target.value
        });
    }

    onChangeID(e){
        this.setState({
            agent_id:e.target.value
        });
    }

    onChangeCenaIznajmljivanja(e){
        this.setState({
            cenaIznajmljivanja:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        fetch('http://127.0.0.1:8000/api/addition/store',{
            method:'post',
            body:JSON.stringify(
                this.state
            ),
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
            }
        }).then(function(response){
            response.json().then(function(resp){
                console.log(resp)
            })
        })
        if (submitted) {
            return <Redirect push to={{
              pathname: '/allModels',
              state: {data: data.toString()}
            }}
            />
        }
    }



    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Ime i prezime modela:</label>
                        <input className="form-control" type="text" id="imePrezime" onChange={this.onChangeModels} placeholder="Puno ime i prezime"></input>
                    </div>
                    <div className="form-group">
                        <label>Cena iznajmljivanja</label>
                        <input className="form-control form-control-sm" type="text" id="cenaIznajmljivanja"  onChange={this.onChangeCenaIznajmljivanja}></input>
                    </div>
                    <div className="form-group">
                        <label>Godište</label>
                        <input className="form-control form-control-sm" type="text" id="godiste"  onChange={this.onChangeGodiste}></input>
                    </div>
                    <div className="form-group">
                        <label>ID agents</label>
                        <input className="form-control form-control-sm" type="text" id="agent_id" onChange={this.onChangeID} ></input>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark" >Submit</button>
                    </div>
                    </form>  
            </div>
        );
    }
}
