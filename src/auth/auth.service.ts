import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService){}

   
   async signup(dto:AuthDto) {
    const {email,password}=dto
    console.log(`Email ${email}`);
    
    //this.prisma.user.
      return {message: 'Sign up was successful'}
    }
  
   
    async signin() {
        return {message: 'Sign in was successful'}
    }
  

    async  signout() {
        return {message: 'Sign out was successful'}
    }
}
