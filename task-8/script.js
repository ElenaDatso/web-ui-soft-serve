//1 Дражнилки -------------------------------------------------------------//

const words = [
  'курочка',
  'хрюшка',
  'корівка',
  'зміючка',
  'бобер',
  'жабка',
  'кізонька',
  'цуцик',
  'букашка-таракашка',
];

const bodyParts = {
  "курочка": {
    wordTransform: "курочки",
    bodyPart: "нога",
    isLike: "тонка",
    animalBody: "лапа",
  },
  "хрюшка": {
    wordTransform: "хрюшки",
    bodyPart: "носик",
    isLike: "кругленький",
    animalBody: "п'ятачок",
  },
  "корівка": {
    wordTransform: "корівки",
    bodyPart: "язик",
    isLike: "довгий",
    animalBody: 'язик',
  },
  "зміючка": {
    wordTransform: 'ситої зміючки',
    bodyPart: "живіт",
    isLike: "величезний",
    animalBody: 'живіт',
  },
  "бобер": {
    wordTransform: "бобра",
    bodyPart: "зуби",
    isLike: "здоровезні",
    animalBody: 'зуби',
  },
  "жабка": {
    wordTransform: "жабки",
    bodyPart: "шкіра",
    isLike: "зелена",
    animalBody: "шкіра",
  },
  кізонька: {
    wordTransform: "кізоньки",
    bodyPart: "ноги",
    isLike: "стрункі",
    animalBody: 'копитця',
  },
  "цуцик": {
    wordTransform: "цуцика",
    bodyPart: "очі",
    isLike: "проникливі",
    animalBody: "оченята",
  },
  'букашка-таракашка': {
    wordTransform: "таракашки",
    bodyPart: "вуса",
    isLike: "тонкі",
    animalBody: "вуса",
  },
};

class YourCase {
  constructor(wordTransform, bodyPart, isLike, animalBody) {
    this.wordTransform = wordTransform;
    this.bodyPart = bodyPart;
    this.isLike = isLike;
    this.animalBody = animalBody;
  }
  sayYourCase() {
    console.log(
      `У тебе ${this.bodyPart} ще більш ${this.isLike}, ніж ${this.animalBody} у ${this.wordTransform}`
    );
  }
}

randomNum();

function randomNum () {
		let num = Math.round(Math.random() * 10);
		if (num < words.length){
			console.log(`Привіт, ${words[num]}, як справи?`)
			findYourCase(words[num]);
		} if (num >= words.length) {
      		randomNum();
    }
		
}

//2. Витончені дражнилки --------------------------------------------------------------------//

function findYourCase(animal) {
  for (let theCase in bodyParts) {
    if (theCase === animal) {
		const yourCase = new YourCase (bodyParts[theCase]['wordTransform'], bodyParts[theCase]['bodyPart'], bodyParts[theCase]['isLike'], bodyParts[theCase]['animalBody']);
		yourCase.sayYourCase();
	}
  }
}




