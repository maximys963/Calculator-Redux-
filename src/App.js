import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux'






 class Calculator extends Component{
     toggleResult = () => {
         let resultArr = this.props.resultArray;
         let result = resultArr.join('');
         console.log(result);
         // this.props.toggleAdd();
     };
    render(){
        return(
            <div className="main-container">
                <div id='dislay'>{this.props.currentValue ? this.props.currentValue : this.props.initialValue}</div>
                <div className='btn-blocks-container'>
                    <div className='left-btns-container'>
                        <div id="clear" onClick={()=>{this.props.toggleClear()}}>AC</div>
                        <div className='left-numbers'>
                            <div className='couple-container'>
                                <div id='seven' onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>7</div>
                                <div id='eight' onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>8</div>
                            </div>
                            <div className='couple-container'>
                                <div id='four' onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>4</div>
                                <div id='five' onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>5</div>
                            </div>
                            <div className='couple-container'>
                                <div id='one' onClick={(e)=>{this.props.toggleAdd(e.target.innerHTML)}}>1</div>
                                <div id='two' onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>2</div>
                            </div>
                        </div>
                        <div id="zero" onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>0</div>
                    </div>
                    <div className='right-btns-container'>
                        <div className='first-vertical'>
                            <div id='devide'>/</div>
                            <div id='nine' onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>9</div>
                            <div id='six' onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>6</div>
                            <div id='three' onClick={(e)=> {this.props.toggleAdd(e.target.innerHTML)}}>3</div>
                            <div id="decimal">.</div>
                        </div>
                        <div className='second-vertical'>
                            <div id="multiply" onClick={(e)=> {this.props.toggleOperation(e.target.innerHTML)}}>*</div>
                            <div id="subtract" onClick={(e)=> {this.props.toggleOperation(e.target.innerHTML)}}>-</div>
                            <div id="add" onClick={(e)=> {this.props.toggleOperation(e.target.innerHTML)}}>+</div>
                            <div id="equals" onClick={()=>{this.toggleResult()}}>=</div>
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
        currentValue: state.currentOperand,
        resultArray: state.operationString,
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
        },
        toggleOperation: (payload) =>{
            dispatch({
                type: 'OPERATION',
                payload: payload
            })
        }


    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);


