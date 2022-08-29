import React from "react"
import Counter from "./Counter";
import { TimeCounter } from "./TimeCounter";
import ListComponent from "./ListComponent";
import FormComponent from "./FormComponent";

function ChooseComponent(props) {
    let chosenComponent = props.choice;
    return(
        chosenComponent === 1 ? 
        <TimeCounter /> : 
        chosenComponent === 2 ?
        <Counter count = { 0 } /> :
        chosenComponent === 3 ?
        <ListComponent /> :
        chosenComponent === 4 ?
        <FormComponent /> :
        <h2>Este componente ainda não existe.</h2>
    );
}



export default ChooseComponent;