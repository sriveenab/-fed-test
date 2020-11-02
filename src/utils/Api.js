import axios from 'axios';

const apiURL = 'https://reqres.in/api';

export default async function getMethod(endPoint) {
	try {
		const res = await axios.get(apiURL + endPoint, {
			headers: { 'Access-Control-Allow-Origin': '*' }
		});
		return res;
	} catch (error) {
		return error;
	}
}