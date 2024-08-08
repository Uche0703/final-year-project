

module.exports={
    homePage: (req,res)=>{
       res.render("index")
    },
    registerPage: (req,res)=>{
       res.render("register")
    },
    loginPage: (req,res)=>{
       res.render("login")
    },
    // labTech PageTransitionEvent..............
    labtechDashbord: (req,res)=>{
        res.render("./labTechFolder/labtechDasbord")
    },
    // labTech PageTransitionEvent..............end
    // doc pageXOffset................
    docDashbord: (req,res)=>{
        res.render("./doctorFolder/doctorDashBord")
    },
    // doc pageXOffset................end
    // patient render...............
    patientDashbord: (req,res)=>{
        res.render("./patientFolder/patientDashBord")
    },
    patientPurchaseCard: (req,res)=>{
        res.render("./patientFolder/viewPurchaseCard")
    },
    patientpProfile: (req,res)=>{
        res.render("./patientFolder/patientprofile")
    },
    // patient render...............end
    // admin pageXOffset.................
    adminDashbord: (req,res)=>{
        res.render("./adminfolder/adminDashBord")
     },
    // admin pageXOffset.................
}