import { RoleGuard } from './../role.guard';
import { JwtGuard } from './jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from '../role.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  //@Role('admin')
  
  @Get('test')
  @UseGuards(JwtGuard)
  async test(@Req() req):Promise<any> {
   const email=req.user.email
    return this.authService.test(email)
  }
}
