var module = angular.module("calculatorApp",[]);
module.controller("calculatorCtrl", calculatorCtrl);

function calculatorCtrl() {
	this.btnClicked = function(button) {
		this.currentOperator=button;
	}

	this.computeResult = function() {
		var num1 = parseFloat(this.input1);
		var num2 = parseFloat(this.input2);
		if(this.currentOperator == '+') {
			this.resultVal = num1 + num2;
		} else if(this.currentOperator == '-') {
			this.resultVal = num1 - num2;
		} else if(this.currentOperator == '*') {
			this.resultVal = num1 * num2;
		} else if(this.currentOperator == '/') {
			this.resultVal = num1 / num2;
		}
	}
}