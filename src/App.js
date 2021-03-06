import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux'


 class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayValue: '',
            operatorWasClicked: false
        }
    }

     // toggleResult = () => {
     //     let resultArr = this.props.resultArray;
     //     let result = resultArr.join('');
     //     console.log(result);
     // };
     toggleNumber = (e) => {
         if(this.state.operatorWasClicked){
             this.setState({
                 displayValue: e.target.innerHTML,
                 operatorWasClicked: false
             });

         }else{
             this.setState({
                 displayValue: this.state.displayValue.concat(e.target.innerHTML)
             });
         }
         this.props.toggleOperation(e.target.innerHTML);


     };
     toggleDecimal = (e) =>{
         if(this.state.displayValue === ''){
             this.setState({
                 displayValue: '0.'
             })
         }else{
             this.setState({
                 displayValue: this.state.displayValue.concat(e.target.innerHTML)
             })
         }
     };
     onClickOperation = (e) => {
         // this.props.toggleOperation(this.state.displayValue);
         this.props.toggleOperation(e.target.innerHTML);
         this.setState({
             operatorWasClicked: true
         })
     };

     countEngine = () =>{
         // this.props.toggleOperation(this.state.displayValue);
         let operationArray = this.props.resultArray;
         console.log(operationArray);
         let result = 0;
         for (let i = 0; i < operationArray.length; i++) {
             let firstOperand = 0;
             let secondOperand = 0;
           if(operationArray[i+1] === '+'){
               firstOperand = parseFloat(operationArray[i]);
               secondOperand = parseFloat(operationArray[i+2]);
               result = firstOperand + secondOperand;
               operationArray[i+2] = result;
               console.log(result);
               i += 1;
           } else if(operationArray[i+1] === '-'){
               firstOperand = parseFloat(operationArray[i]);
               secondOperand = parseFloat(operationArray[i+2]);
               result = firstOperand - secondOperand;
               operationArray[i+2] = result;
               console.log(result);
               i += 1;
           }  else if(operationArray[i+1] === '*'){
             firstOperand = parseFloat(operationArray[i]);
             secondOperand = parseFloat(operationArray[i+2]);
             result = firstOperand * secondOperand;
             operationArray[i+2] = result;
             console.log(result);
             i += 1;
         }else if(operationArray[i+1] === '/'){
               firstOperand = parseFloat(operationArray[i]);
               secondOperand = parseFloat(operationArray[i+2]);
               result = firstOperand / secondOperand;
               operationArray[i+2] = result;
               console.log(result);
               i += 1;
           }

         }
     };

    render(){
        return(
            <div className="main-container">
                <div id='dislay'>{this.state.displayValue ? this.state.displayValue : "0"}</div>
                <div className='btn-blocks-container'>
                    <div className='left-btns-container'>
                        <div id="clear" onClick={()=>{this.props.toggleClear()}}>AC</div>
                        <div className='left-numbers'>
                            <div className='couple-container'>
                                <div id='seven' onClick={this.toggleNumber}>7</div>
                                <div id='eight' onClick={this.toggleNumber}>8</div>
                            </div>
                            <div className='couple-container'>
                                <div id='four' onClick={this.toggleNumber}>4</div>
                                <div id='five' onClick={this.toggleNumber}>5</div>
                            </div>
                            <div className='couple-container'>
                                <div id='one' onClick={this.toggleNumber}>1</div>
                                <div id='two' onClick={this.toggleNumber}>2</div>
                            </div>
                        </div>
                        <div id="zero" onClick={this.toggleNumber}>0</div>
                    </div>
                    <div className='right-btns-container'>
                        <div className='first-vertical'>
                            <div id='devide' onClick={this.onClickOperation}>/</div>
                            <div id='nine' onClick={this.toggleNumber}>9</div>
                            <div id='six' onClick={this.toggleNumber}>6</div>
                            <div id='three' onClick={this.toggleNumber}>3</div>
                            <div id="decimal" onClick={this.toggleDecimal} >.</div>
                        </div>
                        <div className='second-vertical'>
                            <div id="multiply" onClick={this.onClickOperation}>*</div>
                            <div id="subtract" onClick={this.onClickOperation}>-</div>
                            <div id="add" onClick={this.onClickOperation}>+</div>
                            <div id="equals" onClick={this.countEngine}>=</div>
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


