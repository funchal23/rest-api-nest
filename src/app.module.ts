import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'node:path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Joven } from './jovens/entities/joven.entity';
import { JovensModule } from './jovens/jovens.module';

@Module({
  imports: [JovensModule,
  SequelizeModule.forRoot({
    dialect: 'sqlite',
    host: join(__dirname, 'database.sqlite'),
    autoLoadModels: true,
    models: [Joven]
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
