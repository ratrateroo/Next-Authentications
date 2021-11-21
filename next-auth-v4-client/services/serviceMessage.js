export async function serviceMessage(message) {
	console.log('Service Message');
	console.log(message);

	const url = 'http://localhost:3000/api/fetchGreetings';
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ message: message }),
	});

	let responseData = await res.json();
	return responseData;
}
