//your JS code here. If required.
const firstInp = document.querySelector('#num1')
const secondInp = document.querySelector('#num2');
const btn = document.querySelector('#calculate');
const resultF = document.querySelector('#result');
const operator = document.querySelector('#operator')

btn.addEventListener('click', function(){
	let num1 = parseFloat(firstInp.value);
	let num2 = parseFloat(secondInp.value);
	let operation = operator.value;
	let result;

	switch(operation){
		case '+':
			result = num1+num2;
			break;
		case '-':
			result= num1-num2;
		    break;
		case '*':
			result = num1*num2;
			break;
		case '/':
			result= num1/num2;
	}
	resultF.textContent = result;
})