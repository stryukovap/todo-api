import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Todo example')
    .setDescription('The todo API description')
    .setSchemes('https', 'http')
    .setVersion('1.0')
    .addTag('todo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 5000, '0.0.0.0');
}
bootstrap();
