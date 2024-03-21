// API
fetch('http://13.48.136.54:8000/api/api-code')
async function getFacts() {
	try {
		let res = await axis.get("https://13.48.136.54:8000/api/api-code");
		console.log(res.data);
	} catch (c) {
		console.log("error- ", e);
	}
}

const apiUrl = 'http://13.48.136.54:8000/api/api-code/';
const accessKey = 'Bearer c6bbb8b8-34d2-4ca4-8c0d-09386976fa87';

const postData = {};

fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Authorization': accessKey,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(postData)
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		console.log('API Response:', data);
	})
	.catch(error => {
		console.error('Error:', error);
	});
