import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser> =>{
    const user =new User(payload)
    await user.save();

    
    user.fullName()  //custom instance method
    console.log(user.fullName());
    return user;

}

export const getUsersFromDB =async(): Promise<IUser[]>=>{
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB =async (payload:string):Promise<IUser | null> => {
    const user = await User.findOne({id:payload}, {name:1, _id:0, conactNo:1})
    return user;
}
export const getAdminUsersFromDB =async () => {
    const admins = await User.getAdminUsers()
    return admins;
}


// class er sathe attach howa method 
//instance method
//user.getAdminUsers()