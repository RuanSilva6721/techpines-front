import axios from 'axios';

const API_URL = 'http://localhost:8000/api/musics';

export const getAllMusics = async () => {
    return axios.get(API_URL);
};

export const getMusicById = async (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createMusic = async (music) => {
    return axios.post(API_URL, music, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const updateMusic = async (id, music) => {
    return axios.put(`${API_URL}/${id}`, music, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const deleteMusic = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
