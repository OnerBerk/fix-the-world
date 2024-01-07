import {ApiProperty, PartialType} from '@nestjs/swagger';
import {RegisterAuthDto} from './register-auth.dto';
import {IsEmail, IsNotEmpty, Matches, MinLength} from 'class-validator';

export class LoginAuthDto {
  @ApiProperty({example: 'one.bee@gmail.com', required: true})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({example: 'jeSuis1pass!', required: true})
  @IsNotEmpty()
  password: string;
}
