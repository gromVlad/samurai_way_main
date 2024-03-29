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

type MeResponseType = {
  resultCode: number;
  messages: string[];
  data: {
    id: number;
    email: string;
    login: string;
  };
};

export const userAPI = {
  getUsers(currentPage: number, pageNumber: number) {
    return instanceGetUser
      .get(`users?page=${currentPage}&count=${pageNumber}`)
      .then((user) => user.data);
  },
  loginUser() {
    return instanceGetUser.get<MeResponseType>(`auth/me`).then((user) => user.data);
  },
  loginUserOnPage(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: null | string = null
  ) {
    return instance_Post_Delete
      .post(`auth/login`, { email, password, rememberMe, captcha })
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
  updatePhoto(photo: File) {
    const formData = new FormData();
    formData.append("image", photo);
    return instanceGetUser
      .put(`profile/photo`, formData)
      .then((res) => res.data);
  },
  updateProfile(profile: any) {
    return instance_Post_Delete.put(`profile`, profile);
  },
  getCaptchUser() {
    return instance_Post_Delete.put(`security/get-captcha-url`);
  },
};
