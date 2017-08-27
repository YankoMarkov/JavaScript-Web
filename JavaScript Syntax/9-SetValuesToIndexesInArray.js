function solve(input) {
	let num = Number(input[0]);
	let obj = {};
	
	for (let i = 1; i < input.length; i++) {
		let keyValue = input[i].split(" - ");
		let key = keyValue[0];
		let value = keyValue[1];
		
		obj[key] = value;
	}
	for (let i = 0; i < num; i++) {
		if (obj[i] !== undefined) {
			console.log(obj[i]);
		} else {
			console.log(0);
		}
	}
}