import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USERS_CLIENT } from 'apps/bookstore-api-gateway/utils/const';

@Injectable()
export class UsersService {
  constructor(@Inject(USERS_CLIENT) private userClient: ClientProxy) {}

  findAll() {
    return this.userClient.send('user.getAll', {});
  }
}
