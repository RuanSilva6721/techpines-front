import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/albums`;

export const getAllAlbums = async () => {
    return axios.get(API_URL);
};

export const getAlbumById = async (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createAlbum = async (album) => {
    return axios.post(API_URL, album, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const updateAlbum = async (id, album) => {
    return axios.put(`${API_URL}/${id}`, album, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const deleteAlbum = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
