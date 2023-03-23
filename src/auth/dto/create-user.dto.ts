import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    minLength: 1,
    maxLength: 50,
    required: true,
    description: 'User name to identify the person',
    example: 'code_xd',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  username: string;

  @ApiProperty({
    type: 'email',
    required: true,
    description: "User's registered email",
    example: 'text@gmail.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: 'string',
    minLength: 6,
    maxLength: 50,
    required: true,
    example: 'test123TEST',
    description:
      'Password that must have uppercase letters, lowercase letters and numbers.',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;
}
