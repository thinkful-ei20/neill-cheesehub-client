import { API_BASE_URL } from '../config.js'

const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
const fetchCheesesSuccess = (cheeses) => {
    return {
        type: FETCH_CHEESES_SUCCESS, 
        cheeses
    }
}

export const fetchCheesesFromApi = () => {
    return (dispatch) => {
        fetch(`${API_BASE_URL}/api/cheeses`)
        .then(response => response.json())
        .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
        .catch(error => console.log(error))
    }
}