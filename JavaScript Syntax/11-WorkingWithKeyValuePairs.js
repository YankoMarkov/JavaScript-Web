function solve(input) {
	let searchKey = input.pop();
	
	let keyValuePair = input.map(addKeyValuePair);
	let dic = {};
	keyValuePair.forEach(e => {
		if (!dic[e.key]) {
			dic[e.key] = [];
		}
		dic[e.key] = e.value;
	});
	if (!dic[searchKey]) {
		console.log("None")
	} else {
		console.log(dic[searchKey]);
	}
	
	function addKeyValuePair(e) {
		let arr = e.split(' ');
		let key = arr[0];
		let value = arr[1];
		let obj = {key: key, value: value};
		return obj;
	}
}