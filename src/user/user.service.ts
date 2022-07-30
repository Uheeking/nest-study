import { Injectable, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '../entity/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
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

  getHelloWorld(): string {
    return 'Hello World!!';
  }

  onCreateUser(createUserDto: CreateUserDto): Promise<boolean> {
    return this.userRepository.onCreate(createUserDto);
  }

  /**
   * @author Ryan
   * @description 모든 유저 조회
   *
   * @returns {User[]} users
   */
  getUserAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  /**
   * @author Ryan
   * @description 단일 유저 조회
   *
   * @param id 유저 고유 아이디
   * @returns {User} users
   */
  findByUserOne(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }

  /**
   * @author Ryan
   * @description 단일 유저 수정
   *
   * @param id 유저 고유 아이디
   * @param updateUserDto 유저 정보
   *
   * @returns {Promise<boolean>} true
   */
  setUser(id: number, updateUserDto: UpdateUserDto): Promise<boolean> {
    return this.userRepository.onChangeUser(id, updateUserDto);
  }

  /**
   * @author Ryan
   * @description 전체 유저 수정
   *
   * @param updateUserDto 유저 정보
   *
   * @returns {Promise<boolean>} true
   */
  setAllUser(updateUserDto: UpdateUserDto[]): Promise<boolean> {
    return this.userRepository.onChangeUsers(updateUserDto);
  }

  /**
   * @author Ryan
   * @description 유저 삭제
   *
   * @param id
   * @returns {Promise<boolean>} true
   */
  deleteUser(id: number): Promise<boolean> {
    return this.userRepository.onDelete(id);
  }

  
  
}
