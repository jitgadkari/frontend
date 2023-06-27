// import { privateAxios } from "./helper";
import { myAxios } from "./helper";
export const loadComment = (animeId) => {
    return myAxios.get(`/comment/${animeId}`).then((reponse) => reponse.data);
  };
  export const createComment = (content, animeId) => {
    return myAxios.post(`/comment/12/${animeId}`, {content:content});
  };