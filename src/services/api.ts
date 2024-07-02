import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export const fetcher = ({ url, params }: { url: string; params?: unknown }) =>
    api
        .get(url, {
            params,
        })
        .then((res) => res.data)
