import axios from "axios";

const instanceGetUser = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
});

const instance_Post_Delete = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "e908cfda-79ef-4a49-94d7-a2a43ceaff44",
  },
});

export const userAPI = {
  getUsers(currentPage: number, pageNumber: number) {
    return instanceGetUser
      .get(`users?page=${currentPage}&count=${pageNumber}`)
      .then((user) => user.data);
  },
  loginUser() {
    return instanceGetUser.get(`auth/me`).then((user) => user.data);
  },
  loginUserOnPage(email:string, password:string, rememberMe:boolean = false) {
    return instance_Post_Delete
      .post(`auth/login`, { email, password, rememberMe })
      .then((user) => user.data);
  },
  logoutUserOnPage() {
    return instance_Post_Delete.delete(`auth/login`).then((user) => user.data);
  },
  addfollow(id: number) {
    return instance_Post_Delete
      .post(`follow/${id}`, {})
      .then((user) => user.data);
  },
  deleteUser(id: number) {
    return instance_Post_Delete
      .delete(`follow/${id}`)
      .then((user) => user.data);
  },
  addprofile(id: string) {
    return instanceGetUser.get(`profile/${id}`).then((res) => res.data);
  },
  addStatus(id: string) {
    return instanceGetUser.get(`profile/status/${id}`).then((res) => res.data);
  },
  updateStatus(status: string) {
    return instanceGetUser
      .put(`profile/status`, { status })
      .then((res) => res.data);
  },
};
