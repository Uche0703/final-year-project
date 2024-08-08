const postRoute=require("express").Router()
const actorsAuthcont=require("../controller/actorsAuthCont")
const upload=require("../helperMildleWare/imageUpload")
postRoute.post("/register",upload.single("profileImage"),actorsAuthcont.registerActors)
postRoute.post("/login",actorsAuthcont.login)
module.exports=postRoute