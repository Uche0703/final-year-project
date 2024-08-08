const bcrypt=require("bcrypt")
const mongoose=require("mongoose")
const patientSchema=mongoose.Schema({
    fName:{
        type:String,
        require:true,


    },
    role:{
        type:String,
        require:true,
        enum:["admin","patient","doctor","labTechnician"],


    },
    fName:{
        type:String,
        require:true,


    },
    email:{
        type:String,
        // require:true,


    },
    password:{
        type:String,
        require:true,


    },
    phone_no:{
        type:Number,
        require:true,
        match: [
            /^\+?\d{1,4}[-\s]?\d{1,15}$/,
            'Please fill a valid phone number',
          ],


    },
    address:{
        type:String,
        require:true,


    },
    date_of_birth:{
        type:Date,
        require:true,
        validate:{
            validator:function(value){
                const today=new Date()
                const birthDate=new Date(value)
                let age=today.getFullYear()-birthDate.getFullYear()
                let month=today.getMonth()-birthDate.getMonth()
                if(month<0||(month===0 && today.getDate()< birthDate.getDate())){
                    age--;
                }
                return age>=18
            },
            message:"age must be greater than 18"
        }


    },
    state:{
        type:String,
        require:true,


    },
    LGA:{
        type:String,
        require:true,


    },
    gender:{
        type:String,
        require:true,
        enum: ['male', 'female', 'other'], // Ensure gender is one of the specified values



    },
    profileImage:{
        type:String,
        require:true,


    },
    imageType:{
        type: String,
        required:true 
        
      }
})
patientSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next();
})
patientSchema.statics.login= async function(email,password){
    const patient=await this.findOne({email});
    if(patient){
        const  ispswMatch=await bcrypt.compare(password, patient.password)
        if(!ispswMatch) throw new Error("invailid password or email")
            return patient;
     }
     throw new Error("  record not found")
}
const Patientmodel=mongoose.model("patient",patientSchema)
module.exports=Patientmodel