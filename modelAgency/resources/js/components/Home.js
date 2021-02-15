import { extend } from 'lodash';
import React, {Component} from 'react';


export default class Home extends Component {
    render(){
        return (
            <div className="text-centre">
                <br></br>
                <h1>AS Model Agency</h1>
                <h3>Najtraženiji modeli u zemlji!</h3>
                <hr></hr>
                <p>AS Model Agency je osnovana 2010. godine i od tada uspešno radi sa velikim brojem domaćih i inostranih modela, kako muških tako i ženskih.
                    Agencija je do sada imala priliku da sarađuje sa čak 70 različitih modnih brendova, od kojih su najznačajniji Gucci, Prada, Dolce Gabbana i tako dalje.
                    Našu ponudu odlikuje velika različitost i jedinstvenost ličnih crta koje će vaše proizvode istaknuti i učiniti daleko poželjnijim.
                </p>
                <hr/>
            </div>
        );
    }
}