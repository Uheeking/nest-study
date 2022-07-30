import { Injectable, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '../entity/user.entity';
import { CreateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  // private users: User[] = [
  //   { id: 1, name: '유저1' },
  //   { id: 2, name: '유저2' },
  //   { id: 3, name: '유저3' },
  // ];

  onCreateUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.onCreate(createUserDto);
  }

  async getUserById(id:number, req:Request):Promise<User>{
    const found = await this.userRepository.findOne({
      where:{id:parseInt(req.params.id,10)}
    });

    if(!found){
      throw new NotFoundException(`Cant find User with id ${id}`)
    }
    return found
  }

  async deleteUser(id:number): Promise<void>{
    const result = await this.userRepository.delete(id);
    console.log('result',result);
    
  }
  
}
