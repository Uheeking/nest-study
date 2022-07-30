import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserDto,UpdateUserDto  } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() //경로를 설정하지 않으면 "user/" 경로로 설정이 된다.
  getHelloWorld(): string {
    return this.userService.getHelloWorld();
  }

  @Post('/create_user')
  @UsePipes(ValidationPipe)
  onCreateUser(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    return this.userService.onCreateUser(createUserDto);
  }

  @Get('/user_all')
  getUserAll(): Promise<User[]> {
    return this.userService.getUserAll();
  }

  @Get('/user')
  findByUserOne1(@Query('id') id: number): Promise<User> {
    return this.userService.findByUserOne(id);
  }

  /**
   * @author Ryan
   * @description @Param 방식 - 단일 유저 조회
   *
   * @param id 유저 고유 아이디
   */
  @Get('/user/:id')
  findByUserOne2(@Param('id') id: number): Promise<User> {
    return this.userService.findByUserOne(id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    console.log('Login Route');

    return req.user;
  }

  /**
   * @author Ryan
   * @description @Param & @Body 혼합 방식 - 단일 유저 수정
   *
   * @param id 유저 고유 아이디
   * @param name 유저 이름
   */
  @Patch('/user/:id')
  @UsePipes(ValidationPipe)
  setUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<boolean> {
    return this.userService.setUser(id, updateUserDto);
  }

  /**
   * @author Ryan
   * @description @Body 방식 - 전체 유저 수정
   *
   * @param updateUserDto 유저 정보
   */
  @Put('/user/update')
  @UsePipes(ValidationPipe)
  setAllUser(@Body() updateUserDto: UpdateUserDto[]): Promise<boolean> {
    return this.userService.setAllUser(updateUserDto);
  }

  /**
   * @author Ryan
   * @description @Query 방식 - 단일 유저 삭제
   *
   * @param id 유저 고유 아이디
   */
  @Delete('/user/delete')
  deleteUser(@Query('id') id: number): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}