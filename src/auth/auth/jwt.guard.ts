import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


// console.log("hi")
@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
 
  

      
}
