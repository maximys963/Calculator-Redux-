import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import Calculator from './App'

const initialState = {
    initialNumber: '22'
};
const store = createStore((state = initialState, action) => {
    switch (action.type){
        case 'ADD': return {
            ...state, initialNumber: 55
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


