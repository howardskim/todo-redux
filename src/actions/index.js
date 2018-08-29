import types from './types';
import axios from 'axios'
const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=thisismyapikey_69';

//just say export because we are gonna export alot of function

export function getAllListData(){
    const response = axios.get(`${BASE_URL}/todos/${API_KEY}`);
    return {
        type: types.GET_ALL_LIST_DATA,
        payload: response
        
        //All we are doing is just Setting a string to this type property
    }
}

export function addItem(item){
    const response = axios.post(`${BASE_URL}/todos/${API_KEY}`, item);
    return {
        type: types.ADD_ITEM,
        payload: response
    }
}

export const getSingleItem = (id) => async dispatch => {
    
        try {
            const response = await axios.get(`${BASE_URL}/todos/${id + API_KEY}`);
            dispatch({
                type: types.GET_SINGLE_ITEM,
                payload: response
            })            
        } catch(error){
            dispatch({
                type: types.LIST_ERROR,
                error: 'no error found'
            })
        }
}

//use middleware to check if any of our actions is a function... an action cannot be a function right

export function deleteItem(id){
    return async function (dispatch){
        try {
            const response = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
            console.log('delete worked!')
            dispatch({
                type: types.DELETE_ITEM,
                payload: response
            })
        } catch(error){
            console.log('delete failed')
            dispatch({
                type: types.LIST_ERROR,
                error: 'Failed to delete item'
            })
        }
    }
}

export function resetSingle(){
    return {
        type: types.RESET_SINGLE_VIEW
    }
}