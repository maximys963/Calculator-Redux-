import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux'


export default class Calculator extends Component{
    render(){
        return(
            <div className="main-container">
                <div id='dislay'>{this.props.numbers}</div>
                <div className='btn-blocks-container'>
                    <div className='left-btns-container'>
                        <div id="clear">AC</div>
                        <div className='left-numbers'>
                            <div className='couple-container'>
                                <div id='seven'>7</div>
                                <div id='eight'>8</div>
                            </div>
                            <div className='couple-container'>
                                <div id='four'>4</div>
                                <div id='five'>5</div>
                            </div>
                            <div className='couple-container'>
                                <div id='one'>1</div>
                                <div id='two'>2</div>
                            </div>
                        </div>
                        <div id="zero">0</div>
                    </div>
                    <div className='right-btns-container'>
                        <div className='first-vertical'>
                            <div id='devide'>/</div>
                            <div id='nine'>9</div>
                            <div id='six'>6</div>
                            <div id='three'>3</div>
                            <div id="decimal">.</div>
                        </div>
                        <div className='second-vertical'>
                            <div id="multiply">x</div>
                            <div id="subtract">-</div>
                            <div id="add">+</div>
                            <div id="equals">=</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {numbers: state.initialNumber}
};

const mapDispatchToProps = dispatch => {
    return {
        toggleAdd: () =>{
            dispatch({
                type: 'ADD'
            })
        }
    }
};
connect(mapStateToProps, mapDispatchToProps)(Calculator);

