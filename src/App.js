import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux'


 class Calculator extends Component{
    render(){
        return(
            <div className="main-container">
                <div id='dislay'>{this.props.currentValue ? this.props.currentValue : this.props.initialValue}</div>
                <div className='btn-blocks-container'>
                    <div className='left-btns-container'>
                        <div id="clear" onClick={()=>{this.props.toggleClear()}}>AC</div>
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
                                <div id='one' onClick={(e)=>{
                                    this.props.toggleAdd(e.target.innerHTML)
                                    // console.log(e.target.innerHTML)

                                }}>1</div>
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



const mapStateToProps = (state) => {
    return {
        initialValue: state.initialNumber,
        currentValue: state.currentOperand
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAdd: (payload) =>{
            dispatch({
                type: 'NUMBER',
                 payload: payload
            })
        },
        toggleClear: () =>{
            dispatch({
                type: 'CLEAR'
            })
        }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);


