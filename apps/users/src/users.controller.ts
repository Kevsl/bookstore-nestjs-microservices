import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';
import { userProps } from '@app/contracts/src/users/types';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('user.getAll')
  getAll(): userProps[] {
    return this.usersService.getAll();
  }
}
