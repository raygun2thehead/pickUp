const express = require("express");
const router = express.Router();
const passport = require("../../passport");
const userController = require("../../controllers/userController");

//user sign up
router
  .route("/register")
  .post(userController.userCreate);

router
  .route('/login')
  .post(function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
  },
    passport.authenticate('local'),
    (req, res) => {
      console.log('logged in', req.user);
      var userObj = {
        _id: req.user.id,
        username: req.user.username,
        created: req.user.created,
        going: req.user.going
      };
      res.send(userObj);
    }
  )

//user login
// router.route("/login").post(passport.authenticate("local"), (req, res) => {
//   res.json({
//     _id: req.user.id,
//     username: req.user.username,
//     created: req.user.created,
//     going: req.user.going,
//   });
// });

// //gets last index of fav array 
// router.route("/:userId")
// .get(userController.findLatestFav);

// //add favorite to favs array
// router.route("/addFav").put(userController.addFav);

// router.route("/favorite")
// .get(userController.findFav);

router.post("/logout", (req, res) => {
  //   console.log(req.user);
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
    // console.log("user logged out" + req.user);
  } else {
    res.send({ msg: "no user to log out" });
  }
});

// router.route("/addIngredient")
// .put(userController.addIng);

// router.route("/shop/:userId")
// .get(userController.findLatestIng);

// router.route("/removeIngredient")
// .put(userController.removeIng);

// router.route("/removeFav")
// .put(userController.removeFav);

module.exports = router;