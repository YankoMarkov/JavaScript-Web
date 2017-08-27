function solve(input) {
	let students = {};
	
	for (let i = 0; i < input.length; i++) {
		let tempArr = input[i].split(' -> ');
		let key = tempArr[0];
		let value = isNaN(tempArr[1]) ? tempArr[1] : Number(tempArr[1]);
		students[key] = value;
	}
	console.log(JSON.stringify(students));
}

solve(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia']);