import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { environments } from '@/config/environments';
import envConfig from '@/config/env.config';
import { JoiValidationSchema } from '@/config/joi.validation';

import { DatabaseModule } from '@/database/database.module';


@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: environments[process.env.NODE_ENV] || environments.dev,
      isGlobal: true,
      load: [envConfig],
      validationSchema: JoiValidationSchema
    }),
    DatabaseModule,
  ]
})
export class AppModule {}
