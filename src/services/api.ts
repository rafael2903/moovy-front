import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.dispatchEvent(new CustomEvent('logout'))
        }
        return Promise.reject(error)
    }
)

export const fetcher = ({ url, params }: { url: string; params?: unknown }) =>
    api
        .get(url, {
            params,
        })
        .then((res) => res.data)
