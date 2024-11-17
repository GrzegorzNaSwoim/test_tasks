export interface FetchOptions {
    URL: string;
    METHOD?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    HEADERS?: { [key: string]: string };
    data?: any;
}
export async function fetchData(options: FetchOptions): Promise<void> {
    const response: Response = await fetch(options.URL, {
            method: options.METHOD || 'GET',
            headers: options.HEADERS,
            body: JSON.stringify(options.data)
        }
    );
    return await response.json();
}






