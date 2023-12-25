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
  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!])(?=.{8,})$/, {
    message:
      'The password must contain at least one uppercase letter,' +
      'one lowercase letter, one digit, one special character among @, #, $, %, ^, &, +, =, !, and be a minimum of 8 characters in length.',
  })
  password: string;
}
