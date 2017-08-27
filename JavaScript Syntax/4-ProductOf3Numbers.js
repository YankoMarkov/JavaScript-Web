function splve(input) {
	let num1 = Number(input[0]);
	let num2 = Number(input[1]);
	let num3 = Number(input[2]);
	let count = 0;
	let arr = [num1, num2, num3];
	for (let num of arr) {
		if (num < 0) {
			count++;
		}
	}
	if (count === 0 || count === 2) {
		console.log("Positive");
	} else {
		console.log("Negative");
	}
}