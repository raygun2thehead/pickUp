const router = require("express").Router()
const userRoutes = require("./user");
const activityRoutes = require("./activity")

router.use("/activity", activityRoutes)
router.use("/user/", userRoutes)

module.exports = router


