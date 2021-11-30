import { Module } from '@nestjs/common';
import { JovensService } from './jovens.service';
import { JovensController } from './jovens.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Joven } from './entities/joven.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Joven])
  ],
  controllers: [JovensController],
  providers: [JovensService]
})
export class JovensModule {}
