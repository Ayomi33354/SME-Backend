

const express = require("express")
const { AdminSignUp, AdminSignIn, verifyToken } = require("../AdminAuth/Auth")
const uploadAdminProfile = require("../ImagesMiddleware/UploadAdminProfile")
const isAdminLoggedIn = require("../Middleware/IsLoggedIn")
const { AddSupplier, getSuppliers, getSingleSupplier } = require("../SupplierController/Supplier")
const isAdmin = require("../Middleware/isAdmin")
const { postProduct, getAllProduct } = require("../ProductController/Product")
const uploadProductImage = require("../ImagesMiddleware/UploadProductImage")

const AdminRouter = express.Router()


AdminRouter.post("/signup", uploadAdminProfile.single("profileImage"), AdminSignUp)
AdminRouter.post("/signin", AdminSignIn)
AdminRouter.post("/verify_token", verifyToken)



// Supplier
AdminRouter.post("/add_supplier", isAdminLoggedIn, AddSupplier)
AdminRouter.get("/supplier/:supplierId", isAdminLoggedIn, getSingleSupplier)
AdminRouter.get("/suppliers/all", isAdminLoggedIn, getSuppliers)



// Products
AdminRouter.post("/post_product", isAdminLoggedIn, isAdmin, uploadProductImage.single("productImage"), postProduct)

AdminRouter.get("/all/products", isAdminLoggedIn, isAdmin, getAllProduct)

module.exports = AdminRouter   

