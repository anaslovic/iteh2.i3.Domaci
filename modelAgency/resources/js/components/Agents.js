import { extend } from 'lodash';
import React, {Component} from 'react';


export default class Agents extends Component {

    constructor(){
        super();
        this.state={
            st:[]
        }
    }

    

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/agents').then(response=>{
            this.setState({st:response.data});
        });
    }

    onDelete(id){
        axios.delete('http://127.0.0.1:8000/api/allAgents/delete/'+id).then(response=>{
            var s=this.state.st;
            for(var i=0;i<s.length;i++){
                if(s[i].id==id){
                    s.splice(i,1);
                    this.setState({st:s})
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
                        <th scope="col">ID</th>
                        <th scope="col">Ime i prezime</th>
                        <th scope="col">Agencija</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.st.map(agents=>{
                            return(
                                <tr>
                                    <td>{agents.id}</td>
                                    <td>{agents.ime_Prezime}</td>
                                    <td>{agents.naziv_agencije}</td>
                                    <td><a href="#" className="btn btn-success text-warning" onClick={this.onDelete.bind(this,agents.id)}>Delete</a></td>
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