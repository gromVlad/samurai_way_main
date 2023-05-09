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
  addfollow(id: number) {
    return instance_Post_Delete.post(`follow/${id}`,{}).then((user) => user.data);
  },
  deleteUser(id:number){
    return instance_Post_Delete.delete(`follow/${id}`).then((user) => user.data);
  }
};
