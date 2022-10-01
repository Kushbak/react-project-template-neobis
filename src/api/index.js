import axios from 'axios'
import { doctorsList } from './mock/doctorsMock'

const instance = axios.create({
  baseURL: 'https://testrepobackend.herokuapp.com/',
  headers: {
    ContentType: 'application/json',
  }
})



export const authApi = {
  login: (data) => {
    return instance.post('authenticate/login/', data)
  }
}


// Пациенты
// CRUD - CREATE READ UPDATE DELETE

// Врачи
export const doctorsApi = {
  getDoctorsList: () => {
    try {
      return instance.get('doctors')
      .catch(e => {
        return Promise.resolve(doctorsList)
      })
    } catch(e) {
      return Promise.resolve(doctorsList)
    }
  },
  createDoctor: () => {
    return instance.post('doctors')
  },
  updateDoctors: () => {
    return instance.put('doctors')
  },
  deleteDoctor: () => {
    return instance.delete('doctors')
  }
} 

// Документы


// Чеклисты

