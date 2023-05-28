function getRandom(range) {
	return Math.floor(Math.random() * range);
};

const who = ['The dog','My grandma','His turtle','My bird'];
const action = ['ate','peed on','crushed','broke'];
const what = ['my homework', 'the keys', 'the car', 'the money'];
const when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function createExcuse(){
	let excuse =
	who[getRandom(who.length)] +
	" " +
	action[getRandom(action.length)] +
	" " +
	what[getRandom(what.length)] +
	" " +
	when[getRandom(when.length)];
	document.getElementById("excuse").innerHTML = excuse;
};