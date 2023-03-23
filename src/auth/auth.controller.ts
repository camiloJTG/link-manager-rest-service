import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccessLoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() accessLoginDto: AccessLoginDto) {
    return this.authService.login(accessLoginDto);
  }
}
