import { extend } from 'lodash';
import React, {Component} from 'react';



export default class Models extends Component {

    constructor(){
        super();
        this.state={
            m:[]
        }
    }

    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/models').then(response=>{
            this.setState({m:response.data});
        });
    }


    onDelete(id){
        axios.delete('http://127.0.0.1:8000/api/allModels/delete/'+id).then(response=>{
            var x=this.state.m;
            for(var i=0;i<x.length;i++){
                if(x[i].id==id){
                    x.splice(i,1);
                    this.setState({m:x})
                }
            }
        }); 
    }

    render(){
        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ime i prezime</th>
                        <th scope="col">Cena iznajmljivanja</th>
                        <th scope="col">Godište</th>
                        <th scope="col">Agent</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.m.map(models=>{
                            return(
                                <tr>
                                    <td>{models.id}</td>
                                    <td>{models.imePrezime}</td>
                                    <td>{models.cenaIznajmljivanja}</td>
                                    <td>{models.godiste}</td>
                                    <td>{models.agent_id}</td>
                                    <td><a href="#" className="btn btn-danger" onClick={this.onDelete.bind(this,models.id)}>Delete</a></td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                </table>    
            </div>
        );
    }
}