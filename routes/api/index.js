const router = require("express").Router()
const userRoutes = require("./userRoutes");
// const activityRoutes = require("./activity")

// router.use("/activity", activityRoutes)
router.use("/users", userRoutes)

module.exports = router


