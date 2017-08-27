function solve(input) {
	
	function addObj(e) {
		let str = e.split(' -> ');
		let name = str[0];
		let age = Number(str[1]);
		let grade = Number(str[2]);
		let obj = {name: name, age: age, grade: grade};
		return obj;
	}
	
	let persons = input.map(addObj);
	
	for (let person of persons) {
		console.log('Name: ' + person.name);
		console.log('Age: ' + person.age);
		console.log('Grade: ' + person.grade.toFixed(2));
	}
}

solve(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90']);