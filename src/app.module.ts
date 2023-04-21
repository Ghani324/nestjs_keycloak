import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config'
import { AuthGuard, KeycloakConnectModule, PolicyEnforcementMode, ResourceGuard, RoleGuard, TokenValidation } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { JwtMiddleware } from './middleware/auth.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
          isGlobal:true
}),
        // MongooseModule.forRoot(process.env.MONGODB_URL),
        // MongooseModule.forRoot("mongodb+srv://ghaniv:ghaniv@cluster0.ujjpvvy.mongodb.net/test?retryWrites=true&w=majority"),
        AuthModule
        // CorsModule.forRoot({
        //     origin: 'http://localhost:3000',
        //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
        //     allowedHeaders: ['Content-Type', 'Authorization'],
        //   })
      
    ],
controllers:[AppController],
providers:[AppService,
    // {
    //     provide: APP_GUARD,
    //     useClass: AuthGuard,
    //   },
    //   {
    //     provide: APP_GUARD,
    //     useClass: ResourceGuard,
    //   },
    //   {
    //     provide: APP_GUARD,
    //     useClass: RoleGuard,
    //   },
],

 
})

export class AppModule{}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(JwtMiddleware).forRoutes('*');
//   }
// }



