//importing axios to make our ajax calls
import axios from "axios";

export default {
  //user signup
  userRegister: function (userObj) {
    console.log(userObj);
    return axios({
      method: "POST",
      data: userObj,
      withCredentials: true,
      url: "/api/user/register",
    });
  },
  // user login
  userLogin: function (userObj) {
    return axios.post("/api/user/login", userObj);
  },
  userLogout: function (userObj) {
    console.log(userObj);
    return axios.post("/api/user/logout", userObj);
  },
//   //used to update state.favs
//   getLatestFav: function (userId) {
//     return axios.get("/api/user/"+ userId);
//   },
//   //add favorite to favs array 
//   addFav: function (userObj) {
//     return axios.put("/api/user/addFav", userObj);
//   },  
//   addRecipe: function (userObj) {
//     return axios.put("/api/user/addRecipe", userObj);
//   },
//   //Finds recipes with the provided query term
//   getRecipesQuery: function (query) {
//     return axios.get("/api/recipe/query", { params: { q: query } });
//   },

//   getRecipes: function() {
//     return axios.get("/api/recipe");
//   },

//   getWines: function (query) {
//     return axios.get("/api/wine", { params: {q: query}});
//   },


//   //Finds a recipe with the provided id
//   getRecipe: function (id) {
//     return axios.get("/api/recipe/" + id);
//   },
//   // getWines: function () {
//   //   return axios.get("/api/wine");
//   // },
//   getWine: function (id) {
//     return axios.get("/api/wine/" + id);
//   },
//   addIngredient: function(userObj) {
//     return axios.put("/api/user/addIngredient", userObj);
//   },
//   getLatestIng: function (userId) {
//     return axios.get("/api/user/shop/"+userId);
//   },


//   deleteIng: function (userObj) {
//     return axios.put("/api/user/removeIngredient", userObj);
//   },
//   deleteFav: function (userObj) {
//     return axios.put("/api/user/removeFav", userObj);
//   },
  
};