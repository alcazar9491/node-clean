import { Request, Response  } from "express";



export class AuthController {

    constructor() {

    }


    registerUser = (req:Request, res:Response) => {
        res.json('register user controllet')
    }
    loginUser = (req:Request, res:Response) => {
        res.json('login user controllet')

    }
}