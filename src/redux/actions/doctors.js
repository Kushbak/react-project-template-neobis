import { authApi, doctorsApi } from "../../api"
import { doctorsList } from "../../api/mock/doctorsMock"
import { setCookie } from "../../utils"

export const setLogin = (payload) => ({
  type: 'login',    
  payload
})

export const setLogout = (payload) => ({
  type: 'login',    
  payload
})

export const setDoctors = (payload) => ({
  type: 'doctors/get',
  payload
})

export const login = () => (dispatch) => {
  return authApi.login()
    .then(data => {
      setCookie('token', data.token, 1)
      dispatch(setLogin())
    })
    .catch(() => {
      console.log("Чтото пошло не так, попробуйте позже")
    })
}

export const getDoctors = () => (dispatch) => {
  return doctorsApi.getDoctorsList()
    .then(data => {
      dispatch(setDoctors(data))
    })
}