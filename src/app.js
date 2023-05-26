


	let who = ['The dog','My grandma','His turtle','My bird'];
	let action = ['ate','peed on','crushed','broke'];
	let what = ['my homework', 'the keys', 'the car', 'the money'];
	let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
	
	
	function getRandom(range) {
		return Math.floor(Math.random() * range);
	};
	
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