import {FixUser, RolesEnum} from '@prisma/client';
import {ApiProperty} from '@nestjs/swagger';
import {IsEmail} from 'class-validator';

export class FixUserEntity implements FixUser {
  @ApiProperty()
  id: number;

  @ApiProperty({required: true})
  firstname: string;

  @ApiProperty({required: true})
  lastname: string | null;

  @ApiProperty({required: true})
  password: string;

  @ApiProperty({required: true})
  @IsEmail()
  email: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({required: true})
  roles: RolesEnum[];
}
