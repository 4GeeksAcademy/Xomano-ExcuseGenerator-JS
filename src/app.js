


	let who = ['The dog','My grandma','His turtle','My bird'];
	let action = ['ate','peed on','crushed','broke'];
	let what = ['my homework', 'the keys', 'the car', 'the money'];
	let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
	
	
	function getRandom(range) {
		return Math.floor(Math.random() * range);
	};
	
	function createExcuse(){
		let excuse =
		who[getRandom(4)] +
		" " +
		action[getRandom(4)] +
		" " +
		what[getRandom(4)] +
		" " +
		when[getRandom(5)];

		document.getElementById("excuse").innerHTML = excuse;
	};