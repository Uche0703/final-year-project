const Patientmodel=require("../model/patient")
const Adminmodel=require("../model/admin")
const Staffmodel=require("../model/staffs")
const {genAdmintoken,genPatientToken,genStafftoken}=require("../helperMildleWare/jwtTokenmidleWre")
module.exports={
    registerActors: async(req,res)=>{
        try {
           const { fName,
            email,
            password,
            lName,
            phone_no,
            address,
            date_of_birth,
            state,
            LGA,
            gender,
         
            role,}=req.body;
            const profileImage=req.file?req.file.buffer.toString("base64"):null;
            const  imageType=req.file?req.file.mimetype:null; 
            if(role==="admin"){
                const fnameRegex = /^[A-Za-z\s.'-]+$/;
                const lnameRegex = /^[A-Za-z\s.'-]+$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[<,.])[^\s]{8,}$/;
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&<>^.,:;[\]{}()|~`#\-_/\\+=]{4,}$/;
        
                const phone_numberRegex = /^\+?\d{1,4}[-\s]?\d{1,15}$/;
                const addressRegex = /^[A-Za-z0-9\s.,#'-]+$/;
                const stateRegex = /^[A-Za-z\s.'-]+$/;
                const lgaRegex = /^[A-Za-z\s\-'’]+$/;
                  // Validate input fields
        if (!fnameRegex.test(fName)) throw new Error("Invalid first name format");
        if (!lnameRegex.test(lName)) throw new Error("Invalid last name format");
        if (!emailRegex.test(email)) throw new Error("Invalid email format");
        if (!passwordRegex.test(password)) throw new Error("Invalid password format");
        if (!phone_numberRegex.test(phone_no)) throw new Error("Invalid phone number format");
        if (!addressRegex.test(address)) throw new Error("Invalid address format");
        if (!stateRegex.test(state)) throw new Error("Invalid state format");
        if (!lgaRegex.test(LGA)) throw new Error("Invalid LGA format");
        if (isNaN(Date.parse(date_of_birth))) throw new Error("Invalid date of birth format");
           const newAdmin=await Adminmodel.create({
            fName,
            email,
            password,
            lName,
            phone_no,
            address,
            date_of_birth,
            state,
            LGA,
            gender,
         
            role,
            profileImage,
            imageType

           })
           if(newAdmin){
            console.log("admin created successfuly", newAdmin);
           
            res.redirect("/login/page")
           }
           console.log(" registration failed");

            }
            else if (role==="patient"){
                const fnameRegex = /^[A-Za-z\s.'-]+$/;
                const lnameRegex = /^[A-Za-z\s.'-]+$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[<,.])[^\s]{8,}$/;
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&<>^.,:;[\]{}()|~`#\-_/\\+=]{4,}$/;
        
                const phone_numberRegex = /^\+?\d{1,4}[-\s]?\d{1,15}$/;
                const addressRegex = /^[A-Za-z0-9\s.,#'-]+$/;
                const stateRegex = /^[A-Za-z\s.'-]+$/;
                const lgaRegex = /^[A-Za-z\s\-'’]+$/;
                  // Validate input fields
        if (!fnameRegex.test(fName)) throw new Error("Invalid first name format");
        if (!lnameRegex.test(lName)) throw new Error("Invalid last name format");
        if (!emailRegex.test(email)) throw new Error("Invalid email format");
        if (!passwordRegex.test(password)) throw new Error("Invalid password format");
        if (!phone_numberRegex.test(phone_no)) throw new Error("Invalid phone number format");
        if (!addressRegex.test(address)) throw new Error("Invalid address format");
        if (!stateRegex.test(state)) throw new Error("Invalid state format");
        if (!lgaRegex.test(LGA)) throw new Error("Invalid LGA format");
        if (isNaN(Date.parse(date_of_birth))) throw new Error("Invalid date of birth format");
           const newPatience=await Patientmodel.create({
            fName,
            email,
            password,
            lName,
            phone_no,
            address,
            date_of_birth,
            state,
            LGA,
            gender,
         
            role,
            profileImage,
            imageType

           })
           if(newPatience){
            console.log("patient created successfuly", newPatience);
            
            res.redirect("/login/page")
           }
           console.log(" registration failed");


            }
            else  {
                const fnameRegex = /^[A-Za-z\s.'-]+$/;
                const lnameRegex = /^[A-Za-z\s.'-]+$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[<,.])[^\s]{8,}$/;
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&<>^.,:;[\]{}()|~`#\-_/\\+=]{4,}$/;
        
                const phone_numberRegex = /^\+?\d{1,4}[-\s]?\d{1,15}$/;
                const addressRegex = /^[A-Za-z0-9\s.,#'-]+$/;
                const stateRegex = /^[A-Za-z\s.'-]+$/;
                const lgaRegex = /^[A-Za-z\s\-'’]+$/;
                  // Validate input fields
        if (!fnameRegex.test(fName)) throw new Error("Invalid first name format");
        if (!lnameRegex.test(lName)) throw new Error("Invalid last name format");
        if (!emailRegex.test(email)) throw new Error("Invalid email format");
        if (!passwordRegex.test(password)) throw new Error("Invalid password format");
        if (!phone_numberRegex.test(phone_no)) throw new Error("Invalid phone number format");
        if (!addressRegex.test(address)) throw new Error("Invalid address format");
        if (!stateRegex.test(state)) throw new Error("Invalid state format");
        if (!lgaRegex.test(LGA)) throw new Error("Invalid LGA format");
        if (isNaN(Date.parse(date_of_birth))) throw new Error("Invalid date of birth format");
           const newStaff=await Staffmodel.create({
            fName,
            email,
            password,
            lName,
            phone_no,
            address,
            date_of_birth,
            state,
            LGA,
            gender,
         
            role,
            profileImage,
            imageType

           })
           if(newStaff){
            console.log("new staff created successfuly", newStaff);
                
            res.redirect("/login/page")
           }
           console.log(" registration failed");

            }

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message:"internal server error"|| error.message
            })
            
        }
            
        },
        login: async (req,res)=>{
            try {
                const { email,password,role}=req.body
                if(role==="admin"){

            
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[<,.])[^\s]{8,}$/;
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&<>^.,:;[\]{}()|~`#\-_/\\+=]{4,}$/;
        
                if (!emailRegex.test(email)) throw new Error("Invalid email format");
                if (!passwordRegex.test(password)) throw new Error("Invalid password format");
                const loginAdmin=await Adminmodel.login(email,password)
                if (!loginAdmin) {
                    return res.status(400).send({ error: 'Invalid email or password' });
                }
                console.log("login user",loginAdmin);
                const token = genAdmintoken(loginAdmin._id);
                req.session.token = token;
                req.session.adminId = loginAdmin._id;
                console.log('Login admin', loginAdmin);
                console.log('Token generated in login', token);
    
                return res.redirect('/admin/dashBord');

            } else if(role==="patient"){

            
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[<,.])[^\s]{8,}$/;
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&<>^.,:;[\]{}()|~`#\-_/\\+=]{4,}$/;
        
                if (!emailRegex.test(email)) throw new Error("Invalid email format");
                if (!passwordRegex.test(password)) throw new Error("Invalid password format");
                const loginPatient=await Patientmodel.login(email,password)
                if (!loginPatient) {
                    return res.status(400).send({ error: 'Invalid email or password' });
                }
                console.log("login user",loginPatient);
                const token = genPatientToken(loginPatient._id);
                req.session.token = token;
                req.session.loginPatientId = loginPatient._id;
                console.log('Login admin', loginPatient);
                console.log('Token generated in login', token);
    
                return res.redirect('/patients/dashBord');

            }
            // stafs login CSSLayerBlockRule.apply..........................................
               else {

                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&<>^.,:;[\]{}()|~`#\-_/\\+=]{4,}$/;
                const emailRegex = /^(?=.{1,256}$)(?=.{1,64}@.{1,255}$)(?=.{1,255}\..{1,255}$)(?=.{2,})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(email)) throw new Error("Invalid email format");
              
      
                if (!passwordRegex.test(password)) throw new Error("Invalid password format");
      
                const loginStaff = await Staffmodel.login(email, password);
                if (!loginStaff) {
                    return res.status(400).send({ error: 'Invalid email or password' });
                }
      
                const token = genStafftoken(loginStaff._id);
                req.session.token = token;
                req.session.staffId = loginStaff._id;
                console.log('Login admin', loginStaff);
                console.log('Token generated in login', token);
                if(role==="doctor") return res.redirect("/doctors/dashbord")
                if(role==="labTechnician") return res.redirect("/labTechs/dashbord")
              

            }

            } catch (error) {
                console.log("error",error);
                res.status(500).json({
                    message:"intern server error"||error

                }
                    
                )
                
            }
        }
        }

