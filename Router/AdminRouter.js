

const express = require("express")
const { AdminSignUp, AdminSignIn, verifyToken } = require("../AdminAuth/Auth")

const AdminRouter = express.Router()


AdminRouter.post("/signup", AdminSignUp)
AdminRouter.post("/signin", AdminSignIn)
AdminRouter.post("/verify_token", verifyToken)


module.exports = AdminRouter