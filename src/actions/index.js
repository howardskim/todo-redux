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