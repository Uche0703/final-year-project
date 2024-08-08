const getRoute=require("express").Router()
const pagerender=require("../render/pages")
getRoute.get("/",pagerender.homePage)
getRoute.get("/registration/page",pagerender.registerPage)
getRoute.get("/login/page",pagerender.loginPage)
getRoute.get("/labTechs/dashbord",pagerender.labtechDashbord)
getRoute.get("/doctors/dashbord",pagerender.docDashbord)
getRoute.get("/patients/dashbord",pagerender.patientDashbord)
getRoute.get("/patients/profile/page",pagerender.patientpProfile)
getRoute.get("/patients/purchased/card/page",pagerender. patientPurchaseCard)
getRoute.get("/admin/dashbord",pagerender.adminDashbord)

module.exports=getRoute
 