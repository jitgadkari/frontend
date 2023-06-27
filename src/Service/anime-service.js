import { privateAxios } from "./helper";
import { myAxios } from "./helper";


export const loadAllAnime = () => {
  return myAxios
    .get(
      `/anime`
    )
    .then((response) => response.data);
};


export const loadAnime = (animeId) => {
  return myAxios.get(`/anime/${animeId}`).then((reponse) => reponse.data);
};

export function loadAnimeCategoryWise(categoryId) {
  return privateAxios
    .get(`/anime/category/${categoryId}`)
    .then((res) => res.data);
}



export function deleteAnime(animeId) {
  return privateAxios.delete(`/posts/${animeId}`).then((res) => res.data);
}

export function updateAnime(anime, animeId) {
  console.log(anime);
  return privateAxios.put(`/posts/${animeId}`, anime).then((resp) => resp.data);
}

export function searchAnime(enteredTitle){
  console.log(enteredTitle);
  return myAxios.get(`/anime/search/${enteredTitle}`).then((resp)=>resp.data)
}
export function viewHandle(animeId,views){
  console.log(views);
  return myAxios.patch(`/anime/${animeId}`,{views:views}).then((resp)=>resp.data)
}
export function allCategories(){
  return myAxios.get(`/category`).then((resp)=>
    resp.data
  )
}