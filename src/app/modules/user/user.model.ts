import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";


export const userSchema = new Schema<IUser>({
    id:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true
    },
    name: {
        firstName: {
            type:String,
            required:true
        },
        middleName: {
            type:String,
            
        },
        lastName: {
            type:String,
            required:true
        }, 
    
  }, 
  dateOfBirth:{
    type:String,
},
gender:{
type:String,
enum: ['male', 'female']
},
email: {
type:String,
},
conactNo:{
type:String,
},
emergencyContactNo:{
type:String,
},
presentAddress: {
type:String,
required:true
},
permanentAddress:{
type:String,
required:true
},
  
});

const User = model<IUser>("User", userSchema);

export default User;