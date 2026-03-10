import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SnakeCaseInterceptor } from './common/interceptors/snake-case.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global para todas las rutas
  app.setGlobalPrefix('api');

  // Validacion automatica de DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Convertir todas las respuestas a snake_case para compatibilidad con el frontend
  app.useGlobalInterceptors(new SnakeCaseInterceptor());

  // CORS para el frontend
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      process.env.FRONTEND_URL ?? '',
    ].filter(Boolean),
    credentials: true,
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`Backend corriendo en http://localhost:${port}/api`);
}
bootstrap();
