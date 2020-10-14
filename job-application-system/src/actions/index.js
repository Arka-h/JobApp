import Axios from "axios";
import { GET_USER } from './types'
// These are all the actions that the 
// components will ever use to change value of the ReduxState
export const getUser = () => async dispatch => {
            const res = await Axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:4000/user"
        })
        console.log({
            type : GET_USER,
            payload  : res.data
        })
        dispatch({
            type : GET_USER,
            payload  : res.data
        })
    }
  
