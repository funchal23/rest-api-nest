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
    return this.model.create(createJovenDto);
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: string) {
    return this.model.findByPk(id);
  }

  async update(id: string, updateJovenDto: UpdateJovenDto) {
    const joven = await this.model.findByPk(id);
    return joven.update(updateJovenDto);
  }

  async remove(id: string) {
    const joven = await this.model.findByPk(id);
    joven.destroy();
  }
}
