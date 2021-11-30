import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateJovenDto } from './dto/create-joven.dto';
import { UpdateJovenDto } from './dto/update-joven.dto';
import { Joven } from './entities/joven.entity';

@Injectable()
export class JovensService {

  constructor(@InjectModel(Joven) private model: typeof Joven){
  }

  create(createJovenDto: CreateJovenDto) {
    return 'This action adds a new joven';
  }

  findAll() {
    return `This action returns all jovens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} joven`;
  }

  update(id: number, updateJovenDto: UpdateJovenDto) {
    return `This action updates a #${id} joven`;
  }

  remove(id: number) {
    return `This action removes a #${id} joven`;
  }
}
