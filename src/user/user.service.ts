import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  // private users: User[] = [
  //   { id: 1, name: '유저1' },
  //   { id: 2, name: '유저2' },
  //   { id: 3, name: '유저3' },
  // ];

  onCreateUser(createUserDto: CreateUserDto): Promise<boolean> {
    return this.userRepository.onCreate(createUserDto);
  }

  
}
