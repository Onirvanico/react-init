import { Component } from "react";

class ListComponent extends Component {

    list = ['Borboletinha', 'Foi na cozinha', 'Fazer chocolate', 'Para o padrinho'];

    constructor(props) {
        super(props);
        this.state = { populatedList: [] };
    }

    componentDidMount() {
        this.setState( {populatedList: this.listItens()})
    }

    render() {
        return ( 
            <div>
                <ol>
                    { this.state.populatedList }
                </ol>
            </div>
        );
    };

    listItens() {
        return this.list.map((item, index) => <li key={`item_key=${index}`} value={item}>{item}</li>);
    }
}

export default ListComponent;