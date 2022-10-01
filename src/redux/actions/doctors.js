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

export const login = (data) => (dispatch) => {
  return authApi.login(data)
    .then(({ data }) => {
      console.log(data)
      localStorage.setItem('token', data.token)
      dispatch(setLogin())
    })
    .catch(() => {
      console.log("Чтото пошло не так, попробуйте позже")
    })
}

// export const getDoctors = () => (dispatch) => {
//   return doctorsApi.getDoctorsList()
//     .then(data => {
//       dispatch(setDoctors(data))
//     })
// }