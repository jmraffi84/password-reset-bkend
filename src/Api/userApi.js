// src/api/authApi.js
import axios from 'axios';

const BASE_URL = 'https://rad-gnome-237bf5.netlify.app'

export const newUser = async (userData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await axios.post(`${BASE_URL}/signup`, userData, config);
        return response
    } catch (error) {
        throw error;
    }
};

export const forget_password = async (email) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await axios.post(`${BASE_URL}/forget-password`, email, config);
        return response;
    } catch (error) {
        throw error;
    }
};


export const reset_password = async ({ token, password }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',

            },
        }

        const response = await axios.post(`${BASE_URL}/reset-password/${token}`, { password }, config);
        return response;
    } catch (error) {
        throw error;
    }
};

export const authenticate = async (email, password) => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',

            },
        }

        const response = await axios.post(`${BASE_URL}/authenticate`, { email, password }, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verify = async (email, password) => {
    try {
        const endpoint = '/verify';
        let userData = { email, password };
        const response = await axios.post(`${process.env.BASE_URL}${endpoint}`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const resetPasswordApi = async (token, password) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const endpoint = `/reset-password/${token}`;
        const response = await axios.post(`${BASE_URL}${endpoint}`, { password }, config);
        console.log("Am coming from Api front end:", response);
        return response;
    } catch (error) {
        throw error;
    }
};