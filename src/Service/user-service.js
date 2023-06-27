import { myAxios } from "./helper";

export const signUp = (userDto) => {
  return myAxios.post("/auth/register", userDto).then((response) => response.data);
};

export const loginUser = (request) => {
  return myAxios
    .post("/auth/login", request)
    .then((response) => response.data);
};

// export const getUser = (userId) => {
//   return myAxios.get(`/users/${userId}`).then((resp) => resp.data);
// };
