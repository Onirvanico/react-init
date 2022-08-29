import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText1, inputText2, inputReceivedValue } from "../textSlice";


let newValue = 'Waiting...';

export default function FormComponent() {

    const [changedValue, setChange] = useState(newValue);
    const inputTextValue = useSelector(state => state.textInput.value);
    const dispatch = useDispatch();

    return (
        <div style={{ paddingTop: '10px' }}>

            <h2>React with Redux</h2>

            <input type='text' id="myInput" onChange={event => setChange(event.target.value)}/> 
 
            <button onClick={() => dispatch(inputReceivedValue(changedValue))}>
                Send
            </button>
            <button onClick={() => dispatch(inputText1())}>
                Action 1
            </button>
            <button onClick={() => dispatch(inputText2())}>
                Action 2
            </button>

            <h3>{ inputTextValue }</h3>

        </div>
    );

}