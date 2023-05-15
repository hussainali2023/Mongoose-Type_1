import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

export const userSchema = new Schema<IUser, UserModel,IUserMethods>({
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


userSchema.static('getAdminUsers',async function getAdminUsers() {
    const admins = this.find({role:"admin"})
    return admins;
  });


userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });

const User = model<IUser, UserModel>("User", userSchema);

export default User;

// instance methods --> instace er method