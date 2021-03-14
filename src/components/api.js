import * as axios from "axios"

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      "API-key": "30b1d65f-8558-4597-9c1c-0818af8777d0"
    }
  }
)

export const UsersAPI = {
  getUsers: (currentPage = 1, count = 5) => {
    return instance
      .get(`users?page=${currentPage}&count=${count}`)
      .then(response => {
        return response.data
      })
  },
  follower: (id) => {
    return instance
      .post(`follow/${id}`, {},)

  },
  unfollower: (id) => {
    return instance
      .delete(`follow/${id}`)

  },
  getProfile: (userId) => {
    return instance
      .get(`profile/` + userId)

  },

  getStatus: (userId) => {
    return instance
      .get(`profile/status/` + userId)

  },
  updateStatus: (status) => {
    return instance
      .put(`profile/status`, { status: status })

  },
  updatePhoto: (photos) => {
    const formData = new FormData();
    formData.append('image', photos)
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

  },
  // login: () => {
  //   return instance
  //     .put(`/auth/login`, {  })

  // },
  getAuth: () => {
    return instance
      .get(`auth/me`)

  },
  login: (email, password, rememberMe = false, captcha = null) => {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
  },
  logout: () => {
    return instance
      .delete(`auth/login`)
  },
  saveProfile: (profile) => {
    return instance
      .put(`profile`, profile)

  },
  getCaptcha: () => {
    return instance
      .get(`security/get-captcha-url`)

  },

}










