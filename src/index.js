import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import Calculator from './App'

const initialState = {
    initialNumber: '0',
    currentOperand: null,
    operationString: []
};
const store = createStore((state = initialState, action) => {
    switch (action.type){
        case 'NUMBER': return {
            ...state, currentOperand: action.payload, operationString: [...state.operationString, action.payload]
        };
        case 'OPERATION': return {
            ...state, operationString: [...state.operationString, action.payload],
        };
        case 'CLEAR': return {
            ...state, currentOperand: 0
        };
        default: return{
            ...state
        }
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

store.subscribe(()=>{
    console.log(store.getState());
});






ReactDOM.render( <Provider store={store}>
    <Calculator/>
</Provider>, document.getElementById('root'));