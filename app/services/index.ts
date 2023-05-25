import type { FormMethod as Method } from '@remix-run/react';

export async function sendRequest(url: string, options: RequestInit) {
    const response = await fetch(url, options);
    return await response.json();
}

export function createRequestOptions(method: Method) {
    return {
        method,
        headers: {},
    };
}
