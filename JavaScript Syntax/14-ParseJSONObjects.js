function solve(input) {
	let persons = input.map(JSON.parse);
	
	for (let person of persons) {
		console.log('Name: ' + person.name);
		console.log('Age: ' + person.age);
		console.log('Date: ' + person.date);
	}
}