import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JovensService } from './jovens.service';
import { CreateJovenDto } from './dto/create-joven.dto';
import { UpdateJovenDto } from './dto/update-joven.dto';

@Controller('jovens')
export class JovensController {
  constructor(private readonly jovensService: JovensService) {}

  @Post()
  create(@Body() createJovenDto: CreateJovenDto) {
    return this.jovensService.create(createJovenDto);
  }

  @Get()
  findAll() {
    return this.jovensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jovensService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJovenDto: UpdateJovenDto) {
    return this.jovensService.update(id, updateJovenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jovensService.remove(id);
  }
}
