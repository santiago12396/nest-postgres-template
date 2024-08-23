import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '@/config/env.config';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigType<typeof config>) => {
                const { db: database, user: username, password, host, port } = configService.postgres;
                return {
                    type: 'postgres',
                    host,
                    port,
                    username,
                    password,
                    database,
                    autoLoadEntities: true,
                    synchronize: host === 'localhost' ? true : false
                };
            },
            inject: [config.KEY]
        })
    ],
    exports: [ TypeOrmModule ]
})
export class DatabaseModule {}
