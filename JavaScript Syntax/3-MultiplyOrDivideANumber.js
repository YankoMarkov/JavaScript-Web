function solve(input) {
	let num1 = Number(input[0]);
	let num2 = Number(input[1]);
	
	if(num2 >= num1) {
		console.log(num1 * num2);
	} else {
		console.log(num1 / num2);
	}
}