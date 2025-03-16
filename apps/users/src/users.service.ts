import { Injectable } from '@nestjs/common';
import { userProps } from '../utils/types';

@Injectable()
export class UsersService {
  private users: userProps[] = [
    { id: 1, name: 'user1', email: 'user1@user1.com' },
    { id: 2, name: 'user2', email: 'user2@user2.com' },
  ];
  getAll() {
    return this.users;
  }
}
