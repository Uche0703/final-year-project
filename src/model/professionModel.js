
const mongoose=require("mongoose");
const professionSchema=mongoose.Schema({
    address:{
        type:String,
        require:true
    },
    job_title:{
        type:String,
        require:true
    },
    Years_of_experience:{
        type:String,
        require:true
    },
    qualification:{
        type:String,
        require:true
    },
    skills_tools:{
        type:String,
        require:true
    },
    bio:{
        type:String,
        require:true
    },
    profileImage: {
        type: String,
        required:true // Assuming you store the image as a base64 string
      },
      imageType:{
        type: String,
        required:true 
        
      },
      date_of_birth:{
        type:Date,
        require:true,
    validate:{
        validator:function(value){
            const today=new Date();
            const birthDate=new Date(value);
            let age=today.getFullYear()- birthDate.getFullYear();
            let month=today.getMonth() - birthDate.getMonth()
            if(month<0 || (month===0 && today.getDate()< birthDate.getDate()) ){
                age--;
            }
            return age>=18;
        },
        message:"age must be greater than 18"
    }


    },
      userRef:{
        type:mongoose.Types.ObjectId,
        ref:"User"
      },
      createdAt: {
        type: Date,
        default: Date.now
    }
})
const Profession=mongoose.model("userProfession",professionSchema);
module.exports=Profession;