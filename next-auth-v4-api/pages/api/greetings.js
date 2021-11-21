const fetchData = async (req, res) => {
	console.log('Greetings API');
	console.log(req.body);
	res.status(200).send({ message: 'greetings api reached' });

	// const serverResponse = await fetch(
	// 	`${process.env.SERVER_URL}/api/teams/fetch`,
	// 	requestConfig.post
	// );
	// const statusCode = serverResponse.status;
	// let responseData = await serverResponse.json();
	// res.status(statusCode).send(responseData);
};
export default fetchData;
