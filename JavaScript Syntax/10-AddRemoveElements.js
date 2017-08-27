function solve(input) {
	let arr = [];
	
	for (let i = 0; i < input.length; i++) {
		let temp = input[i].split(" ");
		let index = temp[0];
		let value = Number(temp[1]);
		if (index === "add") {
			arr.push(value);
		} else if (index === "remove") {
			arr.splice(value, 1);
		}
	}
	console.log(arr.join('\n'));
}