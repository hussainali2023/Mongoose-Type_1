import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";

export const createUser =async(req: Request, res:Response, next: NextFunction) =>{
    const data = req.body
    const user =await createUserToDB(data)
res.status(200).json({
    data:user
})
}
export const getUsers =async(req: Request, res:Response, next: NextFunction) =>{

    const user =await getUsersFromDB()
res.status(200).json({
    data:user
})
}