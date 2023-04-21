import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response,Request,NextFunction } from 'express';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const logger = new Logger('App');
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
    ],
    methods: ["GET", "POST"],
    credentials: true,
  });
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  // app.setGlobalPrefix('api') //For global api route 
  //Insert your middleware or guards to apply for the whole application
  await app.listen(4000);
  logger.log("App Started on 4000")
}
bootstrap();
