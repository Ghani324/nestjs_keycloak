// import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log("I am inside middleware")
//    next()
//   }
// }

import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { AuthService } from 'src/auth/auth/auth.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private configService:ConfigService){}
  
  async use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers)
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token)
    // const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      console.log("No token")
      return res.status(401).json({ message: 'Missing token' });
    }

    const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLIC_KEY}\n-----END PUBLIC KEY-----`;
    const decodedToken = await jwt.verify(token,this.configService.get('PUBLIC_KEY'),{
      algorithms:["RS256"]
    })
    console.log("decodedToken",decodedToken)
    next();
   
  }
}