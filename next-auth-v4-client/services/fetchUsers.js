export function fetchUsers() {
	const users = async () => {
		const url = '/api/users/fetch';
		const res = await fetch(url, requestConfig.post);

		let statusCode = res.status;
		let responseData = await res.json();
		if (statusCode == 200) return responseData;

		throw responseData.message;
	};

	return users();
}
