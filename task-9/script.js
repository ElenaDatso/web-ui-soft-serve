const input = document.querySelector('.calc__input');
const numbers = document.querySelectorAll('.calc__number');
const result = document.querySelector('.calc__result');
const operator = document.querySelectorAll('.calc__math');
const clear = document.querySelector('.calc__clear');

let currentNum = 0;
let chosenNum = 0;
let currentOperator = '';

result.addEventListener('click', () => {
	if (currentOperator === '=') {
    currentNum = 0;
    chosenNum = 0;
    input.innerHTML = '0';
    currentOperator = '';
  }
  	
	calculation();
	currentOperator = '=';
})

operator.forEach(function(operator){
	
	operator.addEventListener('click', function(){
		currentNum = parseFloat(input.innerHTML) ;
		console.log(currentNum);
		console.log(operator.innerHTML);
		currentOperator = operator.innerHTML;
		input.innerHTML = '0';
	})
})

numbers.forEach(function (i) {
  i.addEventListener('click', function () {

	if (i.innerHTML === '.' && input.innerHTML.includes('.')) return;
	if (input.innerHTML === '0') input.innerHTML = '';
    if (currentOperator && currentOperator !== '=') {
      chosenNum += i.innerHTML;
      input.innerHTML += i.innerHTML;
      chosenNum = parseFloat(input.innerHTML);
    } else {
      currentNum += i.innerHTML;
      input.innerHTML += i.innerHTML;
      currentNum = parseFloat(input.innerHTML);
    }	
  });
});

function calculation () {
	
	switch(currentOperator){

		case '+':
		input.innerHTML = currentNum + chosenNum;
		currentNum = currentNum + chosenNum;
		chosenNum = 0;
		console.log( currentNum + chosenNum );
		break;

		case'-':
		input.innerHTML = currentNum - chosenNum;
		console.log( currentNum - chosenNum );
		currentNum = currentNum - chosenNum;
		chosenNum = 0;
		break;

		case'x':
		input.innerHTML = currentNum * chosenNum;
		console.log( currentNum * chosenNum );
		currentNum = currentNum * chosenNum;
		chosenNum = 0;
		break;

		case'/':
		input.innerHTML = currentNum / chosenNum;
		console.log( currentNum / chosenNum );
		currentNum = currentNum / chosenNum;
		chosenNum = 0;
		break;
	}
}

clear.addEventListener('click', ()=>{
	currentNum = 0;
	chosenNum = 0;
	currentOperator = 0;
	input.innerHTML = '0';
})

// ------------------------------------ ВАГОН-----------------------------------------//

const number = prompt('Enter your place number');

const ifBottomShelf = () => {
	return number%2 !== 0;
}

const ifSide = () => {
	return number > 36;
}

const coopeNumber = () => {
  return number <= 36 ? Math.ceil(number/4) : Math.abs((number - 36)-10);
}

console.log('Your place is:');
console.log('bottom:', ifBottomShelf());
console.log('side:', ifSide());
console.log('coupe N:', coopeNumber());