function solve(input) {
	let arr = input;
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "Stop") {
			return;
		} else {
			console.log(arr[i]);
		}
	}
}