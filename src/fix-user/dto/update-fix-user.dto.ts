import { PartialType } from '@nestjs/mapped-types';
import { CreateFixUserDto } from './create-fix-user.dto';

export class UpdateFixUserDto extends PartialType(CreateFixUserDto) {}
