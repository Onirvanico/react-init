import { createSlice } from "@reduxjs/toolkit";

export const textInputSlice = createSlice({
    name: 'textInput',
    initialState: {
        value: 'Waiting...',
    },
    reducers: {
        inputText1: state => { state.value = 'Primeira Ação' },
        inputText2: state => { state.value = 'Segunda Ação' },
        inputReceivedValue: (state, action) => { state.value = action.payload }
    }
});

export const { inputText1, inputText2, inputReceivedValue } = textInputSlice.actions
export default textInputSlice.reducer