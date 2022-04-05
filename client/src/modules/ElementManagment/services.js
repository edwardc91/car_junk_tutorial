const axios = require("axios");
REACT_APP_API_URI = process.env.REACT_APP_DEV_API_URL

//! Makes
export const getAllMakesService = async () => {
    var response = await axios({
        method: "get",
        url: `${REACT_APP_API_URI}/Makes`
    });

    if (response && response.status === 200) {
        let data = await response.data;
        return data
    }
};

export const addMakeService = async data => {
    var response = await axios({
        method: "post",
        url: `${REACT_APP_API_URI}/Makes`,
        data
    });

    if (response && response.status === 201) {
        let data = await response.data;
        return data
    }
};


export const getMakeService = async id => {
    var response = await axios({
        method: "get",
        url: `${REACT_APP_API_URI}/Makes/${id}`
    });

    if (response && response.status === 200) {
        let data = await response.data;
        return data
    }
};

export const updateMakeService = async (id, data) => {
    var response = await axios({
        method: "put",
        url: `${REACT_APP_API_URI}/Makes/${id}`,
        data
    });

    if (response && response.status === 200) {
        let data = await response.data;
        return data
    }
};

export const deleteMakeService = async id => {
    var response = await axios({
        method: "delete",
        url: `${REACT_APP_API_URI}/Makes/${id}`
    });

    if (response && response.status === 200) {
        let data = await response.data;
        return data
    }
};

//! Sizes
export const getAllSizesService = async () => {
    var response = await axios({
        method: "get",
        url: `${REACT_APP_API_URI}/Siizes`
    });

    if (response && response.status === 200) {
        let data = await response.data;
        return data
    }
};

export const addSizeService = async data => {
    var response = await axios({
        method: "post",
        url: `${REACT_APP_API_URI}/Sizes`,
        data
    });

    if (response && response.status === 201) {
        let data = await response.data;
        return data
    }
};


export const getSizeService = async id => {
    var response = await axios({
        method: "get",
        url: `${REACT_APP_API_URI}/Sizes/${id}`
    });

    if (response && response.status === 200) {
        let data = await response.data;
        return data
    }
};

export const updateSizeService = async (id, data) => {
    var response = await axios({
        method: "put",
        url: `${REACT_APP_API_URI}/Sizes/${id}`,
        data
    });

    if (response && response.status === 200) {
        let data = await response.data;
        return data
    }
};

export const deleteSizeService = async id => {
    var response = await axios({
        method: "delete",
        url: `${REACT_APP_API_URI}/Sizes/${id}`
    });

    if (response && response.status === 200) {
        let data = await response.data;
        return data
    }
};