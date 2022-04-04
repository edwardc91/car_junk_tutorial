const axios = require("axios");
REACT_APP_API_URI = process.env.REACT_APP_DEV_API_URL

//! Makes
export const getAllMakesService = () => {
    return axios({
        method: "get",
        url: `${REACT_APP_API_URI}/Makes`
    });
};

export const addMakeService = data => {
    return axios({
        method: "post",
        url: `${REACT_APP_API_URI}/Makes`,
        data
    });
};


export const getMakeService = id => {
    return axios({
        method: "get",
        url: `${REACT_APP_API_URI}/Makes/${id}`
    });
};

export const updateMakeService = (id, data) => {
    return axios({
        method: "put",
        url: `${REACT_APP_API_URI}/Makes/${id}`,
        data
    });
};

export const deleteMakeService = id => {
    return axios({
        method: "delete",
        url: `${REACT_APP_API_URI}/Makes/${id}`
    });
};

//! Sizes
export const getAllSizesService = () => {
    return axios({
        method: "get",
        url: `${REACT_APP_API_URI}/Siizes`
    });
};

export const addSizeService = data => {
    return axios({
        method: "post",
        url: `${REACT_APP_API_URI}/Sizes`,
        data
    });
};


export const getSizesService = id => {
    return axios({
        method: "get",
        url: `${REACT_APP_API_URI}/Sizes/${id}`
    });
};

export const updateSizesService = (id, data) => {
    return axios({
        method: "put",
        url: `${REACT_APP_API_URI}/Sizes/${id}`,
        data
    });
};

export const deleteSizesService = id => {
    return axios({
        method: "delete",
        url: `${REACT_APP_API_URI}/Sizes/${id}`
    });
};