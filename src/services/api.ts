import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
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
