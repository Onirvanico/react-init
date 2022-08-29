import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.count }
        console.log("Do props", this.state.count);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.makeCount(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    makeCount() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return <h2>Contagem: { this.state.count }</h2>
    }
}

export default Counter;