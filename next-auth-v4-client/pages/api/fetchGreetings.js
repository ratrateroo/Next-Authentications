const fetchData = async (req, res) => {
	console.log('Fetch Api');
	console.log(req.body);
	//res.status(200).send({ message: 'api reached' });

	// const serverResponse = await fetch(
	// 	`${process.env.SERVER_URL}/api/teams/fetch`,
	// 	requestConfig.post
	// );
	// const statusCode = serverResponse.status;
	// let responseData = await serverResponse.json();
	// res.status(statusCode).send(responseData);

	const url = 'http://localhost:3001/api/greetings';
	const serverResponse = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ message: req.body.message }),
	});

	let responseData = await serverResponse.json();
	console.log('Response Data');

	res.status(200).send(responseData);
};
export default fetchData;
