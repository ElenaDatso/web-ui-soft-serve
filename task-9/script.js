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

// const number = prompt('Enter your place number');

// const ifBottomShelf = () => {
// 	return number%2 !== 0;
// }

// const ifSide = () => {
// 	return number > 36;
// }

// const coopeNumber = () => {
//   return number <= 36 ? Math.ceil(number/4) : Math.abs(Math.ceil((number - 36)/2)-10);
// }

// console.log('Your place is:');
// console.log('bottom:', ifBottomShelf());
// console.log('side:', ifSide());
// console.log('coupe N:', coopeNumber());

//------------------------------------ Tic-Tac-Toe Checker ---------------------------------//

const situation = 	[[0, 1, 2],
					 [1, 2, 1],
					 [2, 2, 2]];

function ifWon (array) {
	for (let i = 0; i < 3; i++){
		for (let j = 1; j <=1; j++){
			if (array[i][j] &&
				array[i][j] === array[i][j - 1]	&& 
				array[i][j] === array[i][j + 1]){
					console.log(array[i][j], 'WON');
					return;
				} 
		}	
	}
		for (let i = 0; i <= 2; i++){
			const ar = [];
			for (let j = 0; j <=2; j++){
				ar.push(array[j][i]);
				if (ar[1] &&ar[0] === ar [1] && ar[1] === ar[2]){
					console.log(ar[1], 'WON!')
					return
				}
			}
		}	

		for (let i = 0; i <= 2; i++) {
      		const ar = [];
      		for (let j = 0; j <= 2; j++) {
        		ar.push(array[j][i++]);
        		if (ar[1] && ar[0] === ar[1] && ar[1] === ar[2]) {
              console.log(ar[1], 'WON!');
              return;
            }
      		}
    	}	

		for (let i = 2; i >= 0; i--) {
      		const ar = [];
      	for (let j = 2; j >= 0; j--) {
        	ar.push(array[j][i--]);
        	if (ar[1] && ar[0] === ar[1] && ar[1] === ar[2]) {
          	console.log(ar[1], 'WON!');
			return
        }
      }
    }	
	
	
}

ifWon(situation);