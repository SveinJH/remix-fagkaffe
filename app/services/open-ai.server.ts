import { sendRequest } from '.';

const API_URL = 'https://api.example.com/';

async function getJoke() {
    return await sendRequest(API_URL, {});
}
