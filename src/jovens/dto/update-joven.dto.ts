import { PartialType } from '@nestjs/mapped-types';
import { CreateJovenDto } from './create-joven.dto';

export class UpdateJovenDto extends PartialType(CreateJovenDto) {}
