import axios from 'axios'

export const getVans = () => {
    return axios.get('/api/vans')
}
export const getSingleVan = (id) => {
    return axios.get(`/api/vans/${id}`)
}

export const getHostVans = () => {
    return axios.get('/api/host/vans')
}
export const getSingleHostVan = (id) => {
    return axios.get(`/api/host/vans/${id}`)
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}