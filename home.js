// Array.prototype.filter
const input = [
	{name: 'Ivan', strength: 90000, sex: 'm'},
	{name: 'Nazar', strength: 100000, sex: 'm'},
	{name: 'Alina', strength: 136, sex: 'f'}
];

function isFemaleHero(hero) {
	return (hero.sex === 'f');
}

function isSuperhuman(hero) {
	return (hero.strength >= 500);
}

function filter(predicate, arr) {
	let working = [];
	for (let item of arr) {
		if (predicate(item)) {
			working = working.concat(item);
		}
	}
	return working;
}

const femaleHeroes = filter(isFemaleHero, input);
const superhumans  = filter(isSuperhuman, input);

console.log(femaleHeroes, superhumans);

// Array.prototype.find
function find(predicate, arr) {
	for (let item of arr) {
		if (predicate(item)) {
			return item;
		}
	}
}

// upper
let name = 'nazar kovtun';
let upper = name.split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
console.log(upper);

// line
new Array(5).join(' ').split(' ').map((value, i) => ++i);

// Array.prototype.slice
let person  = {
	name: 'nazar-kovtun'
};

let filters = {
	'deslugify': x => x.replace('-', ' '),
	'uppercase': x => x.toUpperCase()
};

let inputs    = 'name | deslugify | uppercase';
let sections = inputs.split('|').map((x) => x.trim());
let ref      = person[sections[0]];
let output   = sections
	.slice(1)
	.reduce((prev, next) => {
		if (filters[next]) {
			return filters[next].call(null, prev);
		}
		return prev;
	}, ref);

console.log(output);