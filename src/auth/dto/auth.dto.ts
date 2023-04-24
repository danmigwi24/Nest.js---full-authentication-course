import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class AuthDto{
    // @IsNotEmpty()
    // @IsString()
    @IsEmail()
    public email: string;


    @IsNotEmpty()
    @IsString()
    @Length(3,20 ,{message:"Password has to be at least 3 to 20 characters"})
    public password: string;


}