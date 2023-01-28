import axios from 'axios';
import { USER_TYPE,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTRATION_SUCCESS, REGISTRATION_FAIL } from '../types/authType';

export const userRegistration = (data) => {
    return async (dispath) => {
         try {
            const url = "http://localhost:8000/api/auth/registration";
			const { data: res } = await axios.post(url, data);
            console.log(res);
              dispath({
                  type: REGISTRATION_SUCCESS,
                  payload: {
                      successMessage: res.message,
                  }
              })
          } catch (error) {
              dispath({
                  type: REGISTRATION_FAIL,
                  payload: {
                      error: error.response.data.error.errorMessage
                  }
              })
          }
    }
}

export const authLogin = (data,type) => {
     return async (dispath) => {
          try {
            let url;
			if(type===USER_TYPE) url = "http://localhost:8000/api/auth/login";
			else url = "http://localhost:8000/api/worker/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("authToken2", res.token);
			console.log(res);
               dispath({
                   type: LOGIN_SUCCESS,
                   payload: {
                       successMessage: res.message,
                       token: res.token
                   }
               })
           } catch (error) {
               dispath({
                   type: LOGIN_FAIL,
                   payload: {
                       error: error.response.data.error.errorMessage
                   }
               })
           }
     }
}

export const authLogout = () => {
    return (dispath) => {
            localStorage.removeItem("authToken2");
              dispath({
                  type: LOGOUT_SUCCESS,
                  payload: {
                    successMessage: 'Logged out successfull' 
                  }
              })
    }
}