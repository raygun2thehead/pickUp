const activityRoutes = require("./activity")
const router = require("express").Router()

router.use("/activity",activityRoutes)

module.exports = router


