import { Body, Controller, Get ,Param,Post,Put, Req, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from 'nest-keycloak-connect';
import { Request } from 'express';



@Controller("hello")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req:Request) {
  return this.appService.getHello()
  }
 

  // @Post('post')
  // postHello(@Body("name") name:string,@Body("age") age:number): string {
  //   return name + age
  // }
  // @Put('put/:id')
  // putHello(@Param('id') id:number): number {
  //   return id
  // }
}
