import { Validators } from "../../../utils/validators";

export class RegisterUserDto {

   private constructor(
        public name:string,
        public email:string,
        public password:string,
    ){}

    static create(object:{[key:string]:any}):[string?,RegisterUserDto?] {


        const { name, email, password } = object;

        if( !name ) return ['Missing name']
        if( !email ) return ['Missing email']
        if( !Validators.email.test( email ) ) return ['Email is not Valid']
        if( !password ) return ['Missing password']


        return[
            undefined, 
            new RegisterUserDto(
                name, email, password
            )
        ];
    }

}