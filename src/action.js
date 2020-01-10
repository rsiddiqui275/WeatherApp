
export const REQUESTED_API = "REQUESTED_API";
export const RECIEVE_DATA = "RECIEVE_DATA";


export const requestApi = (country) => ({ type: REQUESTED_API, payload: { country } });
export const recieveData = data => ({ type: RECIEVE_DATA, data });