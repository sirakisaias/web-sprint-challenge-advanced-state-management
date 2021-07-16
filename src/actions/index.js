import axios from 'axios';
export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';
export const ADD_FETCH = 'ADD_FETCH';
export const ADD_ERROR_SMURF = 'ADD_ERROR_SMURF';

export const fetchSmurfs = (dispatch) => {
    dispatch({type:START_FETCH});
    axios
    .get('http://localhost:3333/smurfs')
    .then(resp =>{
        console.log('this is it',resp.data)
        dispatch({type:SUCCESS_FETCH, payload:resp.data})
    })
    .catch(error =>{
        console.log(error)
        dispatch({type:FAILED_FETCH, payload:error})
    })

}

export const addSmurfs = ({name, nickname, position, summary}) => {
    return {
        type:ADD_FETCH, payload:{name,nickname, position, summary}
    }
}

export const errorMessage = (msg) =>{
    return{
        type:ADD_ERROR_SMURF, payload: msg
    }
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.